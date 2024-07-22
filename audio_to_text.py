import speech_recognition as sr
import pyttsx3

# Initialize the recognizer
r = sr.Recognizer()
listening = True

# Function to convert text to speech
def SpeakText(command):
    engine = pyttsx3.init()
    engine.say(command)
    engine.runAndWait()


while True:
    try:
        if listening:
            # Use the microphone as source for input
            with sr.Microphone() as source2:
                # Wait for a second to let the recognizer
                # adjust the energy threshold based on
                # the surrounding noise level
                print("Adjusting for ambient noise, please wait...")
                r.adjust_for_ambient_noise(source2, duration=1)
                print("Listening...")
                
                # Listen for the user's input
                audio2 = r.listen(source2)
                
                print("Recognizing...")
                # Using Google to recognize audio
                MyText = r.recognize_google(audio2)
                MyText = MyText.lower()

                print("Did you say: ", MyText)
                SpeakText(MyText)

                # Check for stop or quit commands
                if "stop" in MyText or "quit" in MyText:
                    listening = False
                    SpeakText("Stopping recording")
                elif "start" in MyText:
                    SpeakText("Already recording")
                    
        else:
            # When not listening, only respond to "start" command
            with sr.Microphone() as source2:
                print("Adjusting for ambient noise, please wait...")
                r.adjust_for_ambient_noise(source2, duration=1)
                print("Listening for start command...")
                
                audio2 = r.listen(source2)
                
                print("Recognizing...")
                MyText = r.recognize_google(audio2)
                MyText = MyText.lower()
                
                print("Did you say: ", MyText)
                
                # Check for start command
                if "start" in MyText:
                    listening = True
                    SpeakText("Starting recording")
                    
    except sr.RequestError as e:
        print("Could not request results; {0}".format(e))
        
    except sr.UnknownValueError:
        print("Unknown error occurred")
        
    except Exception as e:
        print(f"An error occurred: {e}")
