# foldersgenerator

This package create Years, Months and Days folders based on input json file. 

If we provide  year, month and days in Input.json file folder structre will be created based on like json file.

For instance in input.json:
{
  "yearlyFolders": ["2022","2023","2024"],
  "monthlyFolders": {
    "2022": ["01_January","02_February","03_March"],
    "2023": ["01_January","02_February","03_March"]
  },
  "dailyFolders": {
    "2022":{
      "01_January": ["01","02","03"],
      "02_February": ["01","02","03"],
      "03_March": ["01","02","03"]
    }
  }
}

Folders will be created like below structure.
  2022
    -- 01_January
        --01
        --02
        --03
    -- 02_February
        --01
        --02
        --03
    -- 03_March
        --01
        --02
        --03
