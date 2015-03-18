DIR=`cd $(dirname $0);pwd`

testSumOfPrimes() {
    GENERATED=`bash $DIR/solution.sh`
    EXPECTED=3682913

    assertEquals "$EXPECTED" "$GENERATED"
}

. $DIR/../../shunit2/src/shunit2
