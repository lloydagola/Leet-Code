<h2><a href="https://leetcode.com/problems/to-be-or-not-to-be">2813. To Be Or Not To Be</a></h2><h3>Easy</h3><hr><p>Write a function <code>expect</code> that helps developers test their code. It should take in any value <code>val</code> and return an object with the following two functions.</p>

<ul>
	<li><code>toBe(val)</code> accepts another value and returns <code>true</code> if the two values <code>===</code> each other. If they are not equal, it should throw an error <code>"Not Equal"</code>.</li>
	<li><code>notToBe(val)</code> accepts another value and returns <code>true</code> if the two values <code>!==</code> each other. If they are equal, it should throw an error <code>"Equal"</code>.</li>
</ul>

<p> </p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> func = () => expect(5).toBe(5)
<strong>Output:</strong> {"value": true}
<strong>Explanation:</strong> 5 === 5 so this expression returns true.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> func = () => expect(5).toBe(null)
<strong>Output:</strong> {"error": "Not Equal"}
<strong>Explanation:</strong> 5 !== null so this expression throw the error "Not Equal".
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> func = () => expect(5).notToBe(null)
<strong>Output:</strong> {"value": true}
<strong>Explanation:</strong> 5 !== null so this expression returns true.
</pre>
