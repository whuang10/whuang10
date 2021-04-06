#Team Tomatoes - Winnie Huang, Renee Mui
#SoftDev
#K19 -- A RESTful Journey Skyward: use API call to display image and text
#2021-04-05

from flask import Flask, render_template
import urllib.request
import json

#reads text file and stores in variable
api_key = open("key_nasa.txt", "r").read()

app = Flask(__name__)

@app.route("/")
def hello_world():
    request_url = urllib.request.urlopen('https://api.nasa.gov/planetary/apod?api_key=' + api_key) # gets info from nasa link
    data = json.load(request_url) # turns info from url to json 
    link = data['url'] # gets image url from json
    info = data['explanation'] # gets image description from json
    return render_template( 'main.html', link = link, info = info)

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = False 
    app.run()
