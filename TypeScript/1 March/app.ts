// 1)   Consider the following user details data
//      [{user: "Sateesh", address:
//      "Hyd", count: 10),
//      {user: "Ranjith", address:
//      "Delhi", count: 30},
//      {user: "Mahesh", address:
//      "Mumbai", count: 20}]
//       The following has to be done.
//       1) create typescript function with one argument/ parameter.
//       2) using this defined parameter function should filter the data by user key value and return the "count" value.
//       3) If not matched with passed "user" parameter value, function should return "No users found".


// SOLUTION : 

interface UserData {
  user: string;
  address: string;
  count: number;
}

function getCountByUser(user: string, data: UserData[]): string | number {
  const filteredData = data.filter((item) => item.user === user);
  if (filteredData.length > 0) {
    return filteredData[0].count;
  } else {
    return "No users found";
  }
}

const data: UserData[] = [
  { user: "Sateesh", address: "Hyd", count: 10 },
  { user: "Ranjith", address: "Delhi", count: 30 },
  { user: "Mahesh", address: "Mumbai", count: 20 },
];

console.log(getCountByUser("Sateesh", data)); 
console.log(getCountByUser("Ranjith", data)); 
console.log(getCountByUser("Jhon", data)); 