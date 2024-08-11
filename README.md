# Conversion Scripts

## Requirements

- NodeJS v16.x.x

## Scripts

### Json to csv converter

1. To start conversion you must provide paths for 2 files: first to json file, second to output of csv.
   The example is as follows: `node convertJsonToCsv --input=input/testFile.json --output=output/testFile.csv`
2. If your json consist of only one object with pairs like { [name]: value } you can provide as third argument header for that values.
   The example is as follows: `node convertJsonToCsv --input=input/testFile.json --output=output/testFile.csv --header product amount`
3. If your json consist of array of objects then header will be created automatically from keys. 


### Json to yaml converter

1. To start conversion you must provide paths for 2 files: first to json file, second to output of csv.
   The example is as follows: `node convertJsonToYaml input/testFile.json output/testFile.yaml`
