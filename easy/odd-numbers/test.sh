DIR=`cd $(dirname $0);pwd`

testOddNumbers() {
    GENERATED=`bash $DIR/solution.sh`
    EXPECTED=`cat $DIR/output_sample.txt`

    assertEquals "$EXPECTED" "$GENERATED"
}

. $DIR/../../shunit2/src/shunit2
