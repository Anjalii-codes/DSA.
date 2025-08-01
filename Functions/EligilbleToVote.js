function EligibleToVote(age) {
    if (age >= 18) {
        return "Eligible"
    }
    else {
        return "Not Eligible"
    }
}

console.log(EligibleToVote(2))