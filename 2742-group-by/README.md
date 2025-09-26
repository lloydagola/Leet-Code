<h2><a href="https://leetcode.com/problems/group-by">2742. Group By</a></h2><h3>Medium</h3><hr><p>Write code that enhances all arrays such that you can call the <code>array.groupBy(fn)</code> method on any array and it will return a <strong>grouped</strong> version of the array.</p>

<p>A <strong>grouped</strong> array is an object where each key is the output of <code>fn(arr[i])</code> and each value is an array containing all items in the original array which generate that key.</p>

<p>The provided callback <code>fn</code> will accept an item in the array and return a string key.</p>

<p>The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.</p>

<p>Please solve it without lodash's <code>_.groupBy</code> function.</p>

<p> </p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
<strong>Output:</strong> 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
<strong>Explanation:</strong>
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]
fn = function (list) { 
  return String(list[0]); 
}
<strong>Output:</strong> 
{ 
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
}
<strong>Explanation:</strong>
The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
All the arrays have 1 as their first element so they are grouped together.
{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> 
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) { 
  return String(n > 5);
}
<strong>Output:</strong>
{
  "true": [6, 7, 8, 9, 10],
  "false": [1, 2, 3, 4, 5]
}
<strong>Explanation:</strong>
The selector function splits the array by whether each number is greater than 5.
</pre>

<p> </p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 <= array.length <= 10<sup>5</sup></code></li>
	<li><code>fn</code> returns a string</li>
</ul>
