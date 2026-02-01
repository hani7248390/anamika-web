from flask import Flask, request, jsonify
from flask_cors import CORS
import pyttsx3
from brain import think
from memory import remember

app = Flask(__name__)
CORS(app)

engine = pyttsx3.init()
engine.setProperty("rate", 155)

def speak(text):
    engine.say(text)
    engine.runAndWait()

@app.route("/ai", methods=["POST"])
def ai():
    text = request.json.get("text", "")
    reply = think(text)
    remember(text, reply)
    speak(reply)
    return jsonify({"reply": reply})

app.run(debug=True)
