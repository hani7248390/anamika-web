from flask import Flask, request, jsonify
from flask_cors import CORS
import pyttsx3
from memory import save_memory, get_memory

app = Flask(__name__)
CORS(app)

engine = pyttsx3.init()
engine.setProperty('rate', 160)

def speak(text):
    engine.say(text)
    engine.runAndWait()

@app.route("/ai", methods=["POST"])
def ai():
    data = request.json
    user_text = data.get("text", "")

    memory = get_memory()
    context = " ".join([m["user"] for m in memory])

    ai_reply = f"मैं सुन रहा हूँ। तुमने कहा: {user_text}"
    
    save_memory(user_text, ai_reply)
    speak(ai_reply)

    return jsonify({
        "reply": ai_reply
    })

if __name__ == "__main__":
    app.run(debug=True)
