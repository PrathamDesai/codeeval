DIR=`cd $(dirname $0);pwd`

testPrimePalindrome() {
    GENERATED=`bash $DIR/solution.sh`
    EXPECTED=929

    assertEquals "$EXPECTED" "$GENERATED"
}

. $DIR/../../shunit2/src/shunit2
