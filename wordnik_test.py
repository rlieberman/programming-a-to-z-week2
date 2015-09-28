#RWET Assignment 3: Wordnik API Poems
#Rebecca Lieberman
#ITP Spring 2015

import sys
import urllib
import json


word = sys.argv[1]    #get the word as input from the command line using sys.argv
api_key = "8f1c6a85da698016e700d0eeb57066aeff88d029d09498010"
# limit_num = random.randrange(2, 25)   #amt of examples you get back, between 2 and 25
limit_num = 25;

url = "http://api.wordnik.com:80/v4/word.json/" + word + "/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=" + str(limit_num) + "&api_key=" + api_key

response_str = urllib.urlopen(url).read()   #we get back a response as a string from the API
response_dict = json.loads(response_str)    #use json library to convert that from a string --> python dict


# #PRINT OUT THE RAW DICTIONARY
# print response_dict

#TEST JUST TO SEE WHAT RESOPONSE WE GET
for item in response_dict['examples']:    #print the examples
  each_example = item['text']   #convert each example into a list so we can slice it
  print each_example


# for item in response_dict['examples']:    #print the examples
#   each_example = item['text'].split()   #convert each example into a list so we can slice it
#   if word in each_example:
#     loc = each_example.index(word)      #find where the word occurs in the list
#     print " ".join(each_example[loc:loc+10])


