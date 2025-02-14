import sys
import requests

filename = input("filename=")

line = "https://nodejs-costmanager.onrender.com"

output = open(filename, "w")

sys.stdout = output

print(line)
print()

print("testing getting the about")
print("-------------------------")

try:
    url = line + "/api/about/"
    data = requests.get(url)

    print("url=" + url)
    print("data.status_code=" + str(data.status_code))
    print("data.text=" + data.text)
    print(data.json())

except Exception as e:
    print("problem")
    print(e)

print()

print("testing getting the report - before adding cost")
print("----------------------------------------------")

try:
    url = line + "/api/report/?id=123123&year=2025&month=2"
    data = requests.get(url)

    print("url=" + url)
    print("data.status_code=" + str(data.status_code))
    print("data.text=" + data.text)

except Exception as e:
    print("problem")
    print(e)

print()

print("testing adding cost item")
print("-------------------------")

try:
    url = line + "/api/add/"
    data = requests.post(url, json={
        'userid': 123123,
        'description': 'milk 9',
        'category': 'food',
        'sum': 8
    })

    print("url=" + url)
    print("data.status_code=" + str(data.status_code))
    print("data.text=" + data.text)

except Exception as e:
    print("problem")
    print(e)

print()

print("testing getting the report - after adding cost")
print("----------------------------------------------")

try:
    url = line + "/api/report/?id=123123&year=2025&month=2"
    data = requests.get(url)

    print("url=" + url)
    print("data.status_code=" + str(data.status_code))
    print("data.text=" + data.text)

except Exception as e:
    print("problem")
    print(e)

print()

print("testing checking if report was deleted before adding new cost")
print("--------------------------------------------------------------")

try:
    url = line + "/api/report/?id=123123&year=2025&month=2"
    data = requests.get(url)

    print("url=" + url)
    print("data.status_code=" + str(data.status_code))
    print("data.text=" + data.text)

except Exception as e:
    print("problem")
    print(e)

print()

print("testing adding cost item with specific date")
print("--------------------------------------------")

try:
    url = line + "/api/add/"
    data = requests.post(url, json={
        'userid': 123123,
        'description': 'Gym Membership',
        'category': 'sport',
        'sum': 30,
        'date': '2025-02-10T10:00:00Z'
    })

    print("url=" + url)
    print("data.status_code=" + str(data.status_code))
    print("data.text=" + data.text)

except Exception as e:
    print("problem")
    print(e)

print()

print("testing adding cost with invalid category")
print("------------------------------------------")

try:
    url = line + "/api/add/"
    data = requests.post(url, json={
        'userid': 123123,
        'description': 'Plane Ticket',
        'category': 'travel',
        'sum': 150
    })

    print("url=" + url)
    print("data.status_code=" + str(data.status_code))
    print("data.text=" + data.text)

except Exception as e:
    print("problem")
    print(e)

print()

print("testing getting user details")
print("------------------------------")

try:
    url = line + "/api/users/123123"
    data = requests.get(url)

    print("url=" + url)
    print("data.status_code=" + str(data.status_code))
    print("data.text=" + data.text)

except Exception as e:
    print("problem")
    print(e)

print()

print("All tests completed successfully!")
