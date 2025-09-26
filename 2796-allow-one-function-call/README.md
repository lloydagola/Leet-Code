<h2><a href="https://leetcode.com/problems/allow-one-function-call">2796. Allow One Function Call</a></h2><h3>Easy</h3><hr><p>Given a function <code>fn</code>, return a new function that is identical to the original function except that it ensures <code>fn</code> is called at most once.</p>

<ul>
	<li>The first time the returned function is called, it should return the same result as <code>fn</code>.</li>
	<li>Every subsequent time it is called, it should return <code>undefined</code>.</li>
</ul>

<p> </p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
<strong>Output:</strong> [{"calls":1,"value":6}]
<strong>Explanation:</strong>
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
<strong>Output:</strong> [{"calls":1,"value":140}]
<strong>Explanation:</strong>
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
</pre>

<p> </p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>calls</code> is a valid JSON array</li>
	<li><code>1 <= calls.length <= 10</code></li>
	<li><code>1 <= calls[i].length <= 100</code></li>
	<li><code>2 <= JSON.stringify(calls).length <= 1000</code></li>
</ul>
