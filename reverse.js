<!DOCTYPE html>
<html>
<script>
const reverse = function (n){
  const reversed_ar = [];
  for (let m = 0; m < n.length; m++){
    reversed_ar[m] = n[(n.length - 1) - m];
  }
  console.log (reversed_ar);
}
const ar = [1, 2, 3, 4, 5];
reverse(ar);
</script>
</html>