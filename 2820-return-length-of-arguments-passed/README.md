<h2><a href="https://leetcode.com/problems/return-length-of-arguments-passed">2820. Return Length of Arguments Passed</a></h2><h3>Easy</h3><hr>Write a function <code>argumentsLength</code> that returns the count of arguments passed to it.
<p> </p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> args = [5]
<strong>Output:</strong> 1
<strong>Explanation:</strong>
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> args = [{}, null, "3"]
<strong>Output:</strong> 3
<strong>Explanation:</strong> 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.
</pre>

<p> </p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>args</code> is a valid JSON array</li>
	<li><code>0 <= args.length <= 100</code></li>
</ul>
