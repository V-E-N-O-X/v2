# -  /Using Suhail-Ser's Docker cuz i dunno how to make one from Quai.io/

FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/V-E-N-O-X/v2 /root/v2
WORKDIR /root/v2/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm","start","yarn" ]
  
# -  /SuhailTechInfo/