const truncateThis = () => {
  let inputOne = document.querySelector("#inputOne").value;
  let truncateString = document.querySelector("#inputTwo").value;
  let truncatedFirst = document.querySelector("#outputOne");
  let truncatedLast = document.querySelector("#outputTwo");
  let truncateStart = inputOne.indexOf(truncateString);
  let checkedBefore = document.querySelector("#radioOne").checked;
  let checkedAfter = document.querySelector("#radioTwo").checked;
  
  console.log(truncateStart);
};
