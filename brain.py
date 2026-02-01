from memory import recall

def think(user_text):
    past = recall()
    context = " ".join([m["user"] for m in past])

    if "कौन हो" in user_text:
        return "मैं तुम्हारा भविष्य का डिजिटल मस्तिष्क हूँ।"

    if "नाम" in user_text:
        return "मेरा नाम अल्ट्रा एआई ट्रान्सेंडेंस है।"

    return f"मैं समझ रहा हूँ। तुमने कहा: {user_text}"
