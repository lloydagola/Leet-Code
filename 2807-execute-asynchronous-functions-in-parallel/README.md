<h2><a href="https://leetcode.com/problems/execute-asynchronous-functions-in-parallel">2807. Execute Asynchronous Functions in Parallel</a></h2><h3>Medium</h3><hr><p>Given an array of asynchronous functions <code>functions</code>, return a new promise <code>promise</code>. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.</p>

<p><code>promise</code> resolves:</p>

<ul>
	<li>When all the promises returned from <code>functions</code> were resolved successfully in parallel. The resolved value of <code>promise</code> should be an array of all the resolved values of promises in the same order as they were in the <code>functions</code>. The <code>promise</code> should resolve when all the asynchronous functions in the array have completed execution in parallel.</li>
</ul>

<p><code>promise</code> rejects:</p>

<ul>
	<li>When any of the promises returned from <code>functions</code> were rejected. <code>promise</code> should also reject with the reason of the first rejection.</li>
</ul>

<p>Please solve it without using the built-in <code>Promise.all</code> function.</p>

<p> </p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> functions = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
<strong>Output:</strong> {"t": 200, "resolved": [5]}
<strong>Explanation:</strong> 
promiseAll(functions).then(console.log); // [5]

The single function was resolved at 200ms with a value of 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]
<strong>Output:</strong> {"t": 100, "rejected": "Error"}
<strong>Explanation:</strong> Since one of the promises rejected, the returned promise also rejected with the same error at the same time.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]
<strong>Output:</strong> {"t": 150, "resolved": [4, 10, 16]}
<strong>Explanation:</strong> All the promises resolved with a value. The returned promise resolved when the last promise resolved.
</pre>

<p> </p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>functions</code> is an array of functions that returns promises</li>
	<li><code>1 <= functions.length <= 10</code></li>
</ul>
