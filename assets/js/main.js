const truncateThis = () => {
  let inputOne = document.querySelector("#inputOne").value;
  let truncateString = document.querySelector("#inputTwo").value;
  let truncatedFirst = document.querySelector("#outputOne");
  let truncatedLast = document.querySelector("#outputTwo");
  let truncateStart = inputOne.indexOf(truncateString);
  let checkedBefore = document.querySelector("#radioOne").checked;
  let checkedAfter = document.querySelector("#radioTwo").checked;

  let resultBeforeFirst = inputOne.slice(0, truncateStart);
  let resultBeforeLast = inputOne.slice(truncateStart);
  let resultAfterFirst = inputOne.slice(
    0,
    truncateStart + truncateString.length
  );
  let resultAfterLast = inputOne.slice(truncateStart + truncateString.length);

  if (checkedBefore) {
    truncatedFirst.innerHTML = resultBeforeFirst;
    truncatedLast.innerHTML = resultBeforeLast;
    return;
  } else if (checkedAfter) {
    truncatedFirst.innerHTML = resultAfterFirst;
    truncatedLast.innerHTML = resultAfterLast;
    return;
  }
};
