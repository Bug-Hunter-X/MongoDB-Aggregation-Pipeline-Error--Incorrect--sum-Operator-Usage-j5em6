```javascript
// Corrected aggregation pipeline
db.collection.aggregate([
  { $match: { /* ... */ } },
  { $group: { _id: "$fieldName", total: { $sum: { $toDouble: "$value" } } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);
```