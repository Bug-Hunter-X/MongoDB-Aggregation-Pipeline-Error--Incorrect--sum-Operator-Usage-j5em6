# MongoDB Aggregation Pipeline Error: Incorrect $sum Operator Usage
This repository demonstrates a common error in MongoDB aggregation pipelines where the `$sum` operator is used incorrectly within the `$group` stage, leading to unexpected aggregation results.  The error arises from providing a string field name to the `$sum` operator, which should instead receive a numerical field.

## Bug Description
The provided `bug.js` file contains an aggregation pipeline that attempts to sum values from a field that is of string type instead of numerical type. This results in incorrect aggregation. 

## Solution
The corrected code in `bugSolution.js` addresses this by ensuring that the field used with `$sum` is of the correct numerical type.  This could involve either explicitly casting the string field to a number within the pipeline, or ensuring the data in the collection stores numerical values in the designated field.
