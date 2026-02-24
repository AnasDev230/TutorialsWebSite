// بيانات الشرح لكل مفهوم C++
const conceptData = {
  // المستوى 1: أساسيات
  intro: {
    title: "📌 INTRODUCTION TO C++",
    body: `
      <p><strong>C++</strong> is a high-performance programming language developed by Bjarne Stroustrup in 1985 at Bell Labs.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// First C++ program</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span></div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">int</span> <span class="function">main</span>() {</div>
        <div class="line">    std::<span class="function">cout</span> &lt;&lt; <span class="string">"Hello, World!"</span> &lt;&lt; std::<span class="function">endl</span>;</div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      <ul>
        <li>✅ Extension of C language</li>
        <li>✅ Supports multiple paradigms: procedural, OOP, generic</li>
        <li>✅ Used in: games, operating systems, embedded systems</li>
        <li>✅ Standard versions: C++98, C++11, C++14, C++17, C++20</li>
      </ul>
    `
  },
  
  datatypes: {
    title: "📊 DATA TYPES",
    body: `
      <p>C++ provides several built-in data types:</p>
      <div class="code-block">
        <div class="line"><span class="comment">// Basic data types</span></div>
        <div class="line"><span class="type">int</span> integer = <span class="number">42</span>;           <span class="comment">// whole numbers</span></div>
        <div class="line"><span class="type">float</span> floating = <span class="number">3.14f</span>;     <span class="comment">// single precision</span></div>
        <div class="line"><span class="type">double</span> precise = <span class="number">3.14159</span>;   <span class="comment">// double precision</span></div>
        <div class="line"><span class="type">char</span> letter = <span class="string">'A'</span>;          <span class="comment">// single character</span></div>
        <div class="line"><span class="type">bool</span> flag = <span class="keyword">true</span>;           <span class="comment">// true/false</span></div>
        <div class="line"><span class="type">wchar_t</span> wide = <span class="string">L'B'</span>;        <span class="comment">// wide character</span></div>
      </div>
      <ul>
        <li><strong>int</strong>: 4 bytes (usually)</li>
        <li><strong>float</strong>: 4 bytes, 7 decimal digits</li>
        <li><strong>double</strong>: 8 bytes, 15 decimal digits</li>
        <li><strong>char</strong>: 1 byte, 256 values</li>
        <li><strong>bool</strong>: 1 byte, true/false</li>
      </ul>
    `
  },
  
  variables: {
    title: "📦 VARIABLES & CONSTANTS",
    body: `
      <p>Variables store data values. Constants cannot be changed.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// Variable declaration</span></div>
        <div class="line"><span class="type">int</span> age = <span class="number">25</span>;</div>
        <div class="line"><span class="type">double</span> salary = <span class="number">55000.50</span>;</div>
        <div class="line"><span class="type">char</span> grade = <span class="string">'A'</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Constants</span></div>
        <div class="line"><span class="keyword">const</span> <span class="type">double</span> PI = <span class="number">3.14159</span>;</div>
        <div class="line"><span class="keyword">const</span> <span class="type">int</span> MAX_USERS = <span class="number">1000</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Auto type deduction (C++11)</span></div>
        <div class="line"><span class="keyword">auto</span> number = <span class="number">42</span>;      <span class="comment">// int</span></div>
        <div class="line"><span class="keyword">auto</span> name = <span class="string">"C++"</span>;     <span class="comment">// const char*</span></div>
      </div>
      <p><strong>Naming rules:</strong> letters, digits, underscore, cannot start with digit.</p>
    `
  },

  operators: {
    title: "➕ OPERATORS",
    body: `
      <p>C++ operators perform operations on variables and values.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// Arithmetic operators</span></div>
        <div class="line"><span class="type">int</span> sum = <span class="number">5</span> + <span class="number">3</span>;        <span class="comment">// 8</span></div>
        <div class="line"><span class="type">int</span> diff = <span class="number">10</span> - <span class="number">4</span>;      <span class="comment">// 6</span></div>
        <div class="line"><span class="type">int</span> product = <span class="number">6</span> * <span class="number">7</span>;    <span class="comment">// 42</span></div>
        <div class="line"><span class="type">int</span> quotient = <span class="number">15</span> / <span class="number">3</span>;  <span class="comment">// 5</span></div>
        <div class="line"><span class="type">int</span> remainder = <span class="number">17</span> % <span class="number">5</span>; <span class="comment">// 2</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Comparison operators</span></div>
        <div class="line"><span class="type">bool</span> isEqual = (<span class="number">5</span> == <span class="number">5</span>);    <span class="comment">// true</span></div>
        <div class="line"><span class="type">bool</span> isGreater = (<span class="number">10</span> > <span class="number">5</span>);  <span class="comment">// true</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Logical operators</span></div>
        <div class="line"><span class="type">bool</span> result = (<span class="keyword">true</span> && <span class="keyword">false</span>);  <span class="comment">// false</span></div>
        <div class="line"><span class="type">bool</span> orResult = (<span class="keyword">true</span> || <span class="keyword">false</span>); <span class="comment">// true</span></div>
      </div>
    `
  },

  io: {
    title: "📝 INPUT/OUTPUT",
    body: `
      <p>C++ uses streams for input and output operations.</p>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span></div>
        <div class="line"><span class="keyword">using namespace</span> std;</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// Output</span></div>
        <div class="line">    cout &lt;&lt; <span class="string">"Enter your name: "</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Input</span></div>
        <div class="line">    <span class="type">string</span> name;</div>
        <div class="line">    cin >> name;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Output with variables</span></div>
        <div class="line">    cout &lt;&lt; <span class="string">"Hello, "</span> &lt;&lt; name &lt;&lt; <span class="string">"!"</span> &lt;&lt; endl;</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
    `
  },

  control: {
    title: "🎮 CONTROL STRUCTURES",
    body: `
      <p>Control structures determine the flow of program execution.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// if-else statement</span></div>
        <div class="line"><span class="type">int</span> score = <span class="number">85</span>;</div>
        <div class="line"><span class="keyword">if</span> (score >= <span class="number">90</span>) {</div>
        <div class="line">    cout &lt;&lt; <span class="string">"Grade A"</span>;</div>
        <div class="line">} <span class="keyword">else if</span> (score >= <span class="number">80</span>) {</div>
        <div class="line">    cout &lt;&lt; <span class="string">"Grade B"</span>;</div>
        <div class="line">} <span class="keyword">else</span> {</div>
        <div class="line">    cout &lt;&lt; <span class="string">"Grade C"</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// switch statement</span></div>
        <div class="line"><span class="type">char</span> grade = <span class="string">'B'</span>;</div>
        <div class="line"><span class="keyword">switch</span>(grade) {</div>
        <div class="line">    <span class="keyword">case</span> <span class="string">'A'</span>:</div>
        <div class="line">        cout &lt;&lt; <span class="string">"Excellent!"</span>;</div>
        <div class="line">        <span class="keyword">break</span>;</div>
        <div class="line">    <span class="keyword">case</span> <span class="string">'B'</span>:</div>
        <div class="line">        cout &lt;&lt; <span class="string">"Good!"</span>;</div>
        <div class="line">        <span class="keyword">break</span>;</div>
        <div class="line">    <span class="keyword">default</span>:</div>
        <div class="line">        cout &lt;&lt; <span class="string">"Keep trying!"</span>;</div>
        <div class="line">}</div>
      </div>
    `
  },

  loops: {
    title: "🔄 LOOPS",
    body: `
      <p>Loops execute code repeatedly based on a condition.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// for loop</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i < <span class="number">5</span>; i++) {</div>
        <div class="line">    cout &lt;&lt; i &lt;&lt; <span class="string">" "</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// while loop</span></div>
        <div class="line"><span class="type">int</span> count = <span class="number">0</span>;</div>
        <div class="line"><span class="keyword">while</span> (count < <span class="number">5</span>) {</div>
        <div class="line">    cout &lt;&lt; count &lt;&lt; <span class="string">" "</span>;</div>
        <div class="line">    count++;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// do-while loop</span></div>
        <div class="line"><span class="type">int</span> x = <span class="number">0</span>;</div>
        <div class="line"><span class="keyword">do</span> {</div>
        <div class="line">    cout &lt;&lt; x &lt;&lt; <span class="string">" "</span>;</div>
        <div class="line">    x++;</div>
        <div class="line">} <span class="keyword">while</span> (x < <span class="number">5</span>);</div>
      </div>
    `
  },

  arrays: {
    title: "📋 ARRAYS",
    body: `
      <p>Arrays store multiple values of the same type in contiguous memory.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// Array declaration</span></div>
        <div class="line"><span class="type">int</span> numbers[<span class="number">5</span>] = {<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>, <span class="number">50</span>};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Accessing elements</span></div>
        <div class="line">cout &lt;&lt; numbers[<span class="number">0</span>];  <span class="comment">// first element (10)</span></div>
        <div class="line">numbers[<span class="number">2</span>] = <span class="number">100</span>;     <span class="comment">// modify third element</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Multidimensional array</span></div>
        <div class="line"><span class="type">int</span> matrix[<span class="number">3</span>][<span class="number">3</span>] = {</div>
        <div class="line">    {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>},</div>
        <div class="line">    {<span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>},</div>
        <div class="line">    {<span class="number">7</span>, <span class="number">8</span>, <span class="number">9</span>}</div>
        <div class="line">};</div>
      </div>
    `
  },

  strings: {
    title: "📎 STRINGS",
    body: `
      <p>C++ provides two ways to work with strings: C-style and std::string.</p>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;string&gt;</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span></div>
        <div class="line"><span class="keyword">using namespace</span> std;</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// C-style string</span></div>
        <div class="line">    <span class="type">char</span> oldStr[] = <span class="string">"Hello"</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// C++ string class</span></div>
        <div class="line">    <span class="type">string</span> str = <span class="string">"Hello"</span>;</div>
        <div class="line">    <span class="type">string</span> name = <span class="string">"World"</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// String operations</span></div>
        <div class="line">    <span class="type">string</span> greeting = str + <span class="string">" "</span> + name;</div>
        <div class="line">    <span class="type">int</span> len = greeting.length();</div>
        <div class="line">    </div>
        <div class="line">    cout &lt;&lt; greeting &lt;&lt; endl;</div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
    `
  },

  functions: {
    title: "⚙️ FUNCTIONS",
    body: `
      <p>Functions are reusable blocks of code that perform specific tasks.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// Function declaration</span></div>
        <div class="line"><span class="type">int</span> <span class="function">add</span>(<span class="type">int</span> a, <span class="type">int</span> b);</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Function definition</span></div>
        <div class="line"><span class="type">int</span> <span class="function">add</span>(<span class="type">int</span> a, <span class="type">int</span> b) {</div>
        <div class="line">    <span class="keyword">return</span> a + b;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Function with default parameters</span></div>
        <div class="line"><span class="type">void</span> <span class="function">greet</span>(<span class="type">string</span> name = <span class="string">"Guest"</span>) {</div>
        <div class="line">    cout &lt;&lt; <span class="string">"Hello, "</span> &lt;&lt; name &lt;&lt; endl;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Call functions</span></div>
        <div class="line"><span class="type">int</span> sum = <span class="function">add</span>(<span class="number">5</span>, <span class="number">3</span>);        <span class="comment">// 8</span></div>
        <div class="line"><span class="function">greet</span>();                    <span class="comment">// "Hello, Guest"</span></div>
      </div>
    `
  },

  // المستوى 2: Pointers
  pointers: {
    title: "👉 POINTERS",
    body: `
      <p>Pointers store memory addresses and provide direct memory access.</p>
      <div class="code-block">
        <div class="line"><span class="type">int</span> x = <span class="number">42</span>;</div>
        <div class="line"><span class="type">int</span>* ptr = &x;      <span class="comment">// pointer stores address of x</span></div>
        <div class="line"> </div>
        <div class="line">cout &lt;&lt; ptr;        <span class="comment">// prints address</span></div>
        <div class="line">cout &lt;&lt; *ptr;       <span class="comment">// dereference - prints 42</span></div>
        <div class="line"> </div>
        <div class="line">*ptr = <span class="number">100</span>;         <span class="comment">// modify x through pointer</span></div>
        <div class="line">cout &lt;&lt; x;          <span class="comment">// now 100</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Null pointer</span></div>
        <div class="line"><span class="type">int</span>* nullPtr = <span class="keyword">nullptr</span>;</div>
      </div>
      <div class="note">⚠️ Always initialize pointers and check for null!</div>
    `
  },

  references: {
    title: "🔗 REFERENCES",
    body: `
      <p>References are aliases to existing variables.</p>
      <div class="code-block">
        <div class="line"><span class="type">int</span> a = <span class="number">10</span>;</div>
        <div class="line"><span class="type">int</span>& ref = a;       <span class="comment">// ref is a reference to a</span></div>
        <div class="line"> </div>
        <div class="line">ref = <span class="number">20</span>;           <span class="comment">// modifies a</span></div>
        <div class="line">cout &lt;&lt; a;          <span class="comment">// prints 20</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// References in functions</span></div>
        <div class="line"><span class="type">void</span> <span class="function">swap</span>(<span class="type">int</span>& x, <span class="type">int</span>& y) {</div>
        <div class="line">    <span class="type">int</span> temp = x;</div>
        <div class="line">    x = y;</div>
        <div class="line">    y = temp;</div>
        <div class="line">}</div>
      </div>
    `
  },

  dynamic: {
    title: "💾 DYNAMIC MEMORY",
    body: `
      <p>Dynamic memory allocation using <code>new</code> and <code>delete</code>.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// Single variable</span></div>
        <div class="line"><span class="type">int</span>* p = <span class="keyword">new</span> <span class="type">int</span>(<span class="number">42</span>);</div>
        <div class="line">cout &lt;&lt; *p;        <span class="comment">// 42</span></div>
        <div class="line"><span class="keyword">delete</span> p;           <span class="comment">// free memory</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Array</span></div>
        <div class="line"><span class="type">int</span>* arr = <span class="keyword">new</span> <span class="type">int</span>[<span class="number">10</span>];</div>
        <div class="line"><span class="keyword">for</span>(<span class="type">int</span> i = <span class="number">0</span>; i < <span class="number">10</span>; i++) {</div>
        <div class="line">    arr[i] = i * <span class="number">10</span>;</div>
        <div class="line">}</div>
        <div class="line"><span class="keyword">delete</span>[] arr;</div>
      </div>
      <div class="note">⚠️ Always match new with delete, new[] with delete[]!</div>
    `
  },

  classes: {
    title: "🏷️ CLASSES & OBJECTS",
    body: `
      <p>Classes are the foundation of object-oriented programming in C++.</p>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">Car</span> {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">string</span> model;</div>
        <div class="line">    <span class="type">int</span> speed;</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Car</span>(<span class="type">string</span> m, <span class="type">int</span> s) {</div>
        <div class="line">        model = m;</div>
        <div class="line">        speed = s;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">accelerate</span>() {</div>
        <div class="line">        speed += <span class="number">10</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Create objects</span></div>
        <div class="line">Car myCar(<span class="string">"Toyota"</span>, <span class="number">50</span>);</div>
        <div class="line">myCar.<span class="function">accelerate</span>();</div>
      </div>
    `
  },

  inheritance: {
    title: "🌳 INHERITANCE",
    body: `
      <p>Inheritance allows a class to inherit properties from another class.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// Base class</span></div>
        <div class="line"><span class="keyword">class</span> <span class="type">Animal</span> {</div>
        <div class="line"><span class="keyword">protected</span>:</div>
        <div class="line">    <span class="type">string</span> name;</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Animal</span>(<span class="type">string</span> n) : name(n) {}</div>
        <div class="line">    <span class="type">void</span> <span class="function">eat</span>() {</div>
        <div class="line">        cout &lt;&lt; name &lt;&lt; <span class="string">" is eating"</span> &lt;&lt; endl;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Derived class</span></div>
        <div class="line"><span class="keyword">class</span> <span class="type">Dog</span> : <span class="keyword">public</span> Animal {</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Dog</span>(<span class="type">string</span> n) : Animal(n) {}</div>
        <div class="line">    <span class="type">void</span> <span class="function">bark</span>() {</div>
        <div class="line">        cout &lt;&lt; name &lt;&lt; <span class="string">" says Woof!"</span> &lt;&lt; endl;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
      </div>
    `
  },

  polymorphism: {
    title: "🔄 POLYMORPHISM",
    body: `
      <p>Polymorphism allows objects of different types to respond to the same interface.</p>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">Shape</span> {</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="keyword">virtual</span> <span class="type">double</span> <span class="function">area</span>() = <span class="number">0</span>;</div>
        <div class="line">    <span class="keyword">virtual</span> ~<span class="function">Shape</span>() {}</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">class</span> <span class="type">Circle</span> : <span class="keyword">public</span> Shape {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">double</span> radius;</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Circle</span>(<span class="type">double</span> r) : radius(r) {}</div>
        <div class="line">    <span class="type">double</span> <span class="function">area</span>() <span class="keyword">override</span> {</div>
        <div class="line">        <span class="keyword">return</span> <span class="number">3.14159</span> * radius * radius;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
      </div>
    `
  },

  templates: {
    title: "⚙️ TEMPLATES",
    body: `
      <p>Templates enable generic programming - writing code that works with any type.</p>
      <div class="code-block">
        <div class="line"><span class="comment">// Function template</span></div>
        <div class="line"><span class="keyword">template</span> &lt;<span class="keyword">typename</span> T&gt;</div>
        <div class="line">T <span class="function">max</span>(T a, T b) {</div>
        <div class="line">    <span class="keyword">return</span> (a > b) ? a : b;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Class template</span></div>
        <div class="line"><span class="keyword">template</span> &lt;<span class="keyword">typename</span> T&gt;</div>
        <div class="line"><span class="keyword">class</span> <span class="type">Box</span> {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    T content;</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Box</span>(T c) : content(c) {}</div>
        <div class="line">    T <span class="function">getContent</span>() { <span class="keyword">return</span> content; }</div>
        <div class="line">};</div>
      </div>
    `
  },

  stl: {
    title: "📦 STL CONTAINERS",
    body: `
      <p>The Standard Template Library provides ready-to-use containers.</p>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;vector&gt;</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;map&gt;</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;string&gt;</span></div>
        <div class="line"><span class="keyword">using namespace</span> std;</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// Vector</span></div>
        <div class="line">    vector&lt;<span class="type">int</span>&gt; vec = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};</div>
        <div class="line">    vec.<span class="function">push_back</span>(<span class="number">6</span>);</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Map</span></div>
        <div class="line">    map&lt;<span class="type">string</span>, <span class="type">int</span>&gt; ages;</div>
        <div class="line">    ages[<span class="string">"Alice"</span>] = <span class="number">25</span>;</div>
        <div class="line">    ages[<span class="string">"Bob"</span>] = <span class="number">30</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
    `
  },

  exceptions: {
    title: "⚠️ EXCEPTION HANDLING",
    body: `
      <p>Exception handling manages runtime errors gracefully.</p>
      <div class="code-block">
        <div class="line"><span class="type">double</span> <span class="function">divide</span>(<span class="type">double</span> a, <span class="type">double</span> b) {</div>
        <div class="line">    <span class="keyword">if</span> (b == <span class="number">0</span>) {</div>
        <div class="line">        <span class="keyword">throw</span> <span class="function">runtime_error</span>(<span class="string">"Division by zero!"</span>);</div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">return</span> a / b;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="keyword">try</span> {</div>
        <div class="line">        <span class="type">double</span> result = <span class="function">divide</span>(<span class="number">10</span>, <span class="number">0</span>);</div>
        <div class="line">    } <span class="keyword">catch</span> (<span class="keyword">const</span> exception& e) {</div>
        <div class="line">        cerr &lt;&lt; e.<span class="function">what</span>() &lt;&lt; endl;</div>
        <div class="line">    }</div>
        <div class="line">}</div>
      </div>
    `
  },

  lambda: {
    title: "λ LAMBDA EXPRESSIONS",
    body: `
      <p>Lambda expressions create anonymous functions inline (C++11).</p>
      <div class="code-block">
        <div class="line"><span class="comment">// Basic lambda</span></div>
        <div class="line"><span class="keyword">auto</span> hello = []() {</div>
        <div class="line">    cout &lt;&lt; <span class="string">"Hello, Lambda!"</span> &lt;&lt; endl;</div>
        <div class="line">};</div>
        <div class="line"><span class="function">hello</span>();</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Lambda with parameters</span></div>
        <div class="line"><span class="keyword">auto</span> add = [](<span class="type">int</span> a, <span class="type">int</span> b) {</div>
        <div class="line">    <span class="keyword">return</span> a + b;</div>
        <div class="line">};</div>
        <div class="line">cout &lt;&lt; <span class="function">add</span>(<span class="number">5</span>, <span class="number">3</span>);</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Capturing variables</span></div>
        <div class="line"><span class="type">int</span> x = <span class="number">10</span>;</div>
        <div class="line"><span class="keyword">auto</span> byValue = [x]() {</div>
        <div class="line">    cout &lt;&lt; <span class="string">"x = "</span> &lt;&lt; x;</div>
        <div class="line">};</div>
      </div>
    `
  },

  smart: {
    title: "🧠 SMART POINTERS",
    body: `
      <p>Smart pointers automatically manage memory (C++11).</p>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;memory&gt;</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// unique_ptr - exclusive ownership</span></div>
        <div class="line">{</div>
        <div class="line">    <span class="keyword">auto</span> ptr1 = <span class="function">make_unique</span>&lt;<span class="type">int</span>&gt;(<span class="number">42</span>);</div>
        <div class="line">    cout &lt;&lt; *ptr1;</div>
        <div class="line">} <span class="comment">// automatically deleted</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// shared_ptr - shared ownership</span></div>
        <div class="line">{</div>
        <div class="line">    <span class="keyword">auto</span> sptr1 = <span class="function">make_shared</span>&lt;<span class="type">int</span>&gt;(<span class="number">42</span>);</div>
        <div class="line">    {</div>
        <div class="line">        <span class="keyword">auto</span> sptr2 = sptr1;  <span class="comment">// reference count++</span></div>
        <div class="line">    } <span class="comment">// count--</span></div>
        <div class="line">} <span class="comment">// memory freed</span></div>
      </div>
    `
  }
};

// جعل المتغير عاماً
if (typeof module !== 'undefined' && module.exports) {
  module.exports = conceptData;
}