function basicTeenager(age) {
  if ((age <= 19) && (age >= 13)) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if ((age <= 19) && (age >= 13)) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager"
  }

}

function ageChecker(age) {
  if (age <= 19 && age >= 13) {
    return "You are a teenager!";
  } else
  if (age <= 12) {
    return "You are a kid"
  } else {
    return "You are a grownup"
  }

}
// Define a function ternaryTeenager that accepts age as a parameter. The body of the function should use the ternary operator to return
// "You are a teenager" if age is between 13-19 and returns "You are not a teenager" if the age is anything else.
function ternaryTeenager(age) {
  return (age <= 19 && age >= 13) ? "You are a teenager" : "You are not a teenager"

}
var age;
function switchAge(age) {
    case 13, 14, 15, 16, 17, 18, 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age"
      break;
}
