curl "http://localhost:3000/profile"
curl -H "Content-Type: application/json" -X POST -d '{"first_name": "Luc", "last_name": "Jean"}' "http://localhost:3000/profile"
sleep 1
curl -H 'Content-Type: application/json' -X PUT -d '{"first_name": "Ines", "last_name": "Gakindi"}' "http://localhost:3000/profile"
curl "http://localhost:3000/profile?id=0"
sleep 1
curl -x DELETE "http://localhost:3000/profile/0"