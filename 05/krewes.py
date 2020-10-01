# Winnie Huang (with Liam Kronman and Matthew Hui)
# SoftDev
# K05 -- Teamwork, but Better This Time; Printing the name of a randomly-selected student from team (orpheus, rex, or endymion)
# 2020-09-29

import random

KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

# user inputs team name
team = input ("Please enter a team you would like to target: ")

<<<<<<< HEAD
# troubleshooting if user inputs invalid team name
while team not in KREWES.keys():
    team = input("Please re-enter a valid team name: ")

# prints randomly selected student from team user inputted
print (random.choice(KREWES[team]))
=======
# troubleshoots if user inputs invalid team name
while team not in KREWES.keys():
    team = input("Please re-enter a valid team name: ")

# prints random student name from inputted team name
print (random.choice(KREWES[team]))

>>>>>>> 14deaf56579bb73a5e9f5fa807513be79cbbce83
