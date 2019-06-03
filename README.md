### B2BList App
B2B listing app

### Installation

* Run the following command in your terminal to cLone the repository:

```bash
git clone https://github.com/MazenRefaat/b2blist
```

* Inside the repository folder run the following command to install the required dependencies:


```bash
npm install
```


### Run 

* Inside Application folder, run the following command: 

```bash
npm start
```

### Docker Run 

* Inside Application folder, run the following command: 

```bash
docker build -t b2blist .

docker run -it -p {PortNumber}:8080 b2blist

App will be running at http://0.0.0.0:{PortNumber}
```