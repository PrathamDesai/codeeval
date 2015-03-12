DIR=`cd $(dirname $0);pwd`

testFizzBuzz() {
    GENERATED=`bash $DIR/solution.sh $DIR/input_sample.txt`
    EXPECTED=`cat $DIR/output_sample.txt`

    assertEquals "$EXPECTED" "$GENERATED"
}

. $DIR/../../shunit2/src/shunit2
