import requests
from bs4 import BeautifulSoup
import pandas as pd


url = "https://raw.githubusercontent.com/nikolaichem/nanotoxicity_prediction/main/final_model/dataset_3090.csv"

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

print(soup)

