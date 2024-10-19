from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/news')
def get_medical_news():
    api_key = '9297f203420580678d5f4a9509f41906'
    url = f'http://api.mediastack.com/v1/news?access_key={api_key}&categories=health&languages=en'

    try:
        response = requests.get(url)
        data = response.json()
        if 'error' in data:
            return jsonify({'error': data['error']['message']})
        return jsonify(data['data'])
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
