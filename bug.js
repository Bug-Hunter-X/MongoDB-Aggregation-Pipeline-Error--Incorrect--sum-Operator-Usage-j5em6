```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  { $match: { /* ... */ } },
  { $group: { _id: "$fieldName", total: { $sum: "$value" } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);
```