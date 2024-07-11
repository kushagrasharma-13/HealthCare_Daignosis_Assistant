import json

with open('./config.json', 'r') as file:
    data = json.load(file)
    print(data.get('GROQ_API_KEY'))