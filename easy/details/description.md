# Details

## Challenge description

There are two details on a M\*N checkered field. The detail X covers several
(at least one first cell) cells in each line. The detail Y covers several
(at least one last cell) cells. Each cell is either fully covered with a
detail or not.

For example:

    x x . y y
    x x x . y
    x . . y y
    x x . . y

Also, the details may have cavities (or other complex structures). Please see
example below (the detail Y is one detail):

    x x x . y y y y
    x . . . y . . y
    x x . . y y y y
    x . . . . . y y
    x x . . . . y y

The detail Y starts moving left (without any turn) until it bumps into the X
detail at least with one cell. Determine by how many cells the detail Y will
be moved.

## Input sample:

The first argument is a file with different test cases. Each test case
contains a matrix the lines of which are separated by comma. (Empty cells are
marked as ".")

For example:

    xx.yy,xxx.y,x..yy,xx..y
    xxx.yyyy,x...y..y,xx..yyyy,x.....yy,xx....yy
    xx...yy,x....yy,xx..yyy,x..yyyy
    xxyy,x..y,xx.y

## Output sample:

Print out the number of cells the detail Y will be moved.

For example:

    1
    1
    2
    0

## Constraints

* The matrices can be on different M\*N sizes. (2 <= M <= 10, 2 <= N <= 10)
* Number of test cases is 40.

<!--
vim:ft=markdown:
-->
