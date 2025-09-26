<h2><a href="https://leetcode.com/problems/calculator-with-method-chaining">2863. Calculator with Method Chaining</a></h2><h3>Easy</h3><hr><p>Design a <code>Calculator</code> class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The <code>Calculator</code> class constructor should accept a number which serves as the initial value of <code>result</code>.</p>

<p>Your <font face="monospace"><code>Calculator</code> </font>class should have the following methods:</p>

<ul>
	<li><code>add</code> - This method adds the given number <code>value</code> to the <code>result</code> and returns the updated <code>Calculator</code>.</li>
	<li><code>subtract</code> - This method subtracts the given number <code>value</code> from the <code>result</code> and returns the updated <code>Calculator</code>.</li>
	<li><code>multiply</code> - This method multiplies the <code>result</code>  by the given number <code>value</code> and returns the updated <code>Calculator</code>.</li>
	<li><code>divide</code> - This method divides the <code>result</code> by the given number <code>value</code> and returns the updated <code>Calculator</code>. If the passed value is <code>0</code>, an error <code>"Division by zero is not allowed"</code> should be thrown.</li>
	<li><code>power</code> - This method raises the <code>result</code> to the power of the given number <code>value</code> and returns the updated <code>Calculator</code>.</li>
	<li><code>getResult</code> - This method returns the <code>result</code>.</li>
</ul>

<p>Solutions within <code>10<sup>-5</sup></code> of the actual result are considered correct.</p>

<p> </p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
actions = ["Calculator", "add", "subtract", "getResult"], 
values = [10, 5, 7]
<strong>Output:</strong> 8
<strong>Explanation:</strong> 
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
actions = ["Calculator", "multiply", "power", "getResult"], 
values = [2, 5, 2]
<strong>Output:</strong> 100
<strong>Explanation:</strong> 
new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> 
actions = ["Calculator", "divide", "getResult"], 
values = [20, 0]
<strong>Output:</strong> "Division by zero is not allowed"
<strong>Explanation:</strong> 
new Calculator(20).divide(0).getResult() // 20 / 0 

The error should be thrown because we cannot divide by zero.
</pre>

<p> </p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>actions</code> is a valid JSON array of strings</li>
	<li><code>values</code> is a valid JSON array of numbers</li>
	<li><code>2 <= actions.length <= 2 * 10<sup>4</sup></code></li>
	<li><code>1 <= values.length <= 2 * 10<sup>4</sup> - 1</code></li>
	<li><code>actions[i]</code> is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult"</li>
	<li>First action is always "Calculator"</li>
	<li>Last action is always "getResult"</li>
</ul>
