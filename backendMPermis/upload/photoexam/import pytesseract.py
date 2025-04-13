import pytesseract
from PIL import Image
import pandas as pd
import os

# Spécifier le chemin de Tesseract (obligatoire sous Windows)
pytesseract.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

# Dossier contenant les images (utilisez des doubles barres obliques inverses)
image_folder = r'C:\\Users\\COMPUTER\\Desktop\\MonP\\phototest'

# Vérifier si le dossier existe
if not os.path.exists(image_folder):
    raise FileNotFoundError(f"Le dossier '{image_folder}' n'existe pas.")

# Initialiser une liste pour stocker les données
data = []

# Parcourir toutes les images dans le dossier
for image_name in os.listdir(image_folder):
    if image_name.endswith('.jpg'):
        # Chemin complet de l'image
        image_path = os.path.join(image_folder, image_name)
        
        # Vérifier si le fichier existe
        if not os.path.exists(image_path):
            print(f"Attention : Le fichier '{image_path}' n'existe pas. Ignoré.")
            continue
        
        # Ouvrir l'image
        try:
            image = Image.open(image_path)
        except Exception as e:
            print(f"Erreur lors de l'ouverture de l'image '{image_path}': {e}")
            continue
        
        # Obtenir les dimensions de l'image
        width, height = image.size
        
        # Découper la moitié inférieure de l'image
        lower_half = image.crop((0, height // 2, width, height))
        
        # Extraire le texte de la moitié inférieure de l'image
        try:
            text = pytesseract.image_to_string(lower_half, lang='fra')
        except pytesseract.TesseractError as e:
            print(f"Erreur Tesseract lors de l'extraction du texte de '{image_path}': {e}")
            continue
        
        # Nettoyer et diviser le texte
        lines = text.splitlines()
        lines = [line.strip() for line in lines if line.strip()]
        
        # Supposons que le texte de l'image est sur la première ligne, les réponses sur les suivantes
        image_text = lines[0] if lines else ''
        options = lines[1:] if len(lines) > 1 else []
        
        # Ajouter les données à la liste
        data.append([image_name, image_text, ', '.join(options)])

# Créer un DataFrame pandas
df = pd.DataFrame(data, columns=['Numero de l\'image', 'Texte de l\'image', 'Options de reponse'])

# Sauvegarder le DataFrame dans un fichier CSV
output_csv = r'C:\\Users\\COMPUTER\\Desktop\\MonP\\resultats.csv'
df.to_csv(output_csv, index=False)

print(f"Extraction terminée. Les résultats sont sauvegardés dans '{output_csv}'.")