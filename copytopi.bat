ssh pi@raspberrypi "rm -r /home/pi/website-index/public"
scp -r public pi@raspberrypi:website-index