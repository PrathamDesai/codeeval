cat $1 | sed 's/zero/0/g'  \
       | sed 's/one/1/g'   \
       | sed 's/two/2/g'   \
       | sed 's/three/3/g' \
       | sed 's/four/4/g'  \
       | sed 's/five/5/g'  \
       | sed 's/six/6/g'   \
       | sed 's/seven/7/g' \
       | sed 's/eight/8/g' \
       | sed 's/nine/9/g'  \
       | tr -d ';'
