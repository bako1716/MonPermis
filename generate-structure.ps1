# generate-structure.ps1
# -----------------------------------------
# Script PowerShell pour générer l'arborescence du projet + stats
# Compatible ASCII (pas de caractères spéciaux)

# === CONFIG =========================================================
$projectPath = "D:\MonP\MonPermis"
$outputFile  = "MP-structure.txt"
$maxDepth    = 5
$excludeDirs = @('node_modules', '.git', 'dist', 'build', '.next', 'coverage', '.vscode', '.idea')
# ===================================================================

function Get-DirectoryTree {
    param(
        [string]$Path,
        [string]$Indent = "",
        [int]$MaxDepth = 5,
        [int]$CurrentDepth = 0
    )

    if ($CurrentDepth -ge $MaxDepth) { return }

    try {
        $items =
            Get-ChildItem -Path $Path -Force -ErrorAction SilentlyContinue |
            Where-Object { $_.Name -notin $excludeDirs } |
            Sort-Object @{Expression = { -not $_.PSIsContainer }}, Name  # Dossiers d'abord

        for ($i = 0; $i -lt $items.Count; $i++) {
            $item    = $items[$i]
            $isLast  = ($i -eq $items.Count - 1)
            $prefix  = if ($isLast) { "+-- " } else { "|-- " }
            $newIndent = if ($isLast) { "$Indent    " } else { "$Indent|   " }

            if ($item.PSIsContainer) {
                "$Indent$prefix$($item.Name)/"
                Get-DirectoryTree -Path $item.FullName -Indent $newIndent -MaxDepth $MaxDepth -CurrentDepth ($CurrentDepth + 1)
            } else {
                "$Indent$prefix$($item.Name)"
            }
        }
    } catch {
        Write-Host "Erreur d'accès à : $Path" -ForegroundColor Yellow
    }
}

Write-Host "Génération de l'architecture du projet..." -ForegroundColor Green
Write-Host "Chemin : $projectPath" -ForegroundColor Cyan
Write-Host ""

# En-tête
$structure = @"
HEDERA TOKEN CHATBOT - STRUCTURE DU PROJET
==========================================
Généré le : $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
Chemin     : $projectPath

"@

# Corps
$rootName = Split-Path -Path $projectPath -Leaf
$structure += "$rootName/`n"
$structure += (Get-DirectoryTree -Path $projectPath -MaxDepth $maxDepth) -join "`n"

# Sauvegarde (UTF8 pour compatibilité)
$structure | Out-File -FilePath $outputFile -Encoding utf8

# Affichage
Write-Host ""
Write-Host "Structure générée avec succès !" -ForegroundColor Green
Write-Host "Fichier créé : $outputFile" -ForegroundColor Cyan
Write-Host ""
Write-Host "APERÇU :" -ForegroundColor Yellow
Write-Host "========" -ForegroundColor Yellow
Get-Content $outputFile | Select-Object -First 200

# Statistiques
Write-Host ""
Write-Host "STATISTIQUES :" -ForegroundColor Magenta
Write-Host "============== " -ForegroundColor Magenta

$allFiles =
    Get-ChildItem -Path $projectPath -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object { $_.DirectoryName -notmatch 'node_modules|\.git|dist|build|\.next|coverage|\.vscode|\.idea' }

$filesByExtension = $allFiles | Group-Object Extension | Sort-Object Count -Descending

Write-Host ("Nombre total de fichiers : {0}" -f $allFiles.Count) -ForegroundColor White
Write-Host ""
Write-Host "Top 10 des types de fichiers :" -ForegroundColor White
foreach ($group in $filesByExtension | Select-Object -First 10) {
    $ext = if ($group.Name) { $group.Name } else { "(sans extension)" }
    Write-Host ("  {0,-12} : {1,5}" -f $ext, $group.Count) -ForegroundColor Gray
}
