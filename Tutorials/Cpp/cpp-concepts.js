// بيانات الشرح المتقدم لكل مفهوم C++
const conceptData = {
  // ==================== المستوى 1: أساسيات ====================
  intro: {
    title: "📌 INTRODUCTION TO C++",
    body: `
      <p><strong>C++</strong> is a powerful, high-performance programming language developed by <strong>Bjarne Stroustrup</strong> in 1985 at Bell Labs as an extension of the C language.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Why C++?</h3>
      <ul>
        <li>✅ <strong>Performance:</strong> Compiled language with direct memory access</li>
        <li>✅ <strong>Multi-paradigm:</strong> Procedural, Object-Oriented, Generic, Functional</li>
        <li>✅ <strong>Portability:</strong> Runs on almost any platform</li>
        <li>✅ <strong>Control:</strong> Low-level memory manipulation</li>
        <li>✅ <strong>Libraries:</strong> Huge ecosystem (STL, Boost, Qt)</li>
      </ul>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Where is C++ Used?</h3>
      <ul>
        <li>🎮 Game engines (Unreal Engine, Unity)</li>
        <li>🖥️ Operating systems (Windows, macOS, Linux)</li>
        <li>📱 Embedded systems</li>
        <li>💻 Web browsers (Chrome, Firefox)</li>
        <li>📊 Financial systems</li>
        <li>🎬 Animation and film (Maya, 3ds Max)</li>
      </ul>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 First Program: "Hello, World!"</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// First C++ program - prints "Hello, World!" to console</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span>  <span class="comment">// Include input/output library</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Every C++ program must have a main() function</span></div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// std::cout sends output to console</span></div>
        <div class="line">    <span class="comment">// std::endl adds a newline and flushes the buffer</span></div>
        <div class="line">    std::<span class="function">cout</span> &lt;&lt; <span class="string">"Hello, World!"</span> &lt;&lt; std::<span class="function">endl</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Return 0 indicates successful execution</span></div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Compilation Process</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Step 1: Save file as hello.cpp</span></div>
        <div class="line"><span class="comment">// Step 2: Compile using g++</span></div>
        <div class="line">g++ hello.cpp -o hello  <span class="comment">// Creates executable 'hello'</span></div>
        <div class="line"><span class="comment">// Step 3: Run the program</span></div>
        <div class="line">./hello  <span class="comment">// On Linux/Mac</span></div>
        <div class="line">hello.exe  <span class="comment">// On Windows</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 C++ Standard Versions</h3>
      <ul>
        <li><strong>C++98:</strong> First standardized version</li>
        <li><strong>C++11:</strong> Major update (auto, smart pointers, lambda)</li>
        <li><strong>C++14:</strong> Minor improvements</li>
        <li><strong>C++17:</strong> Filesystem, parallel algorithms</li>
        <li><strong>C++20:</strong> Concepts, ranges, coroutines</li>
        <li><strong>C++23:</strong> Latest standard</li>
      </ul>
    `,
  },

  datatypes: {
    title: "📊 DATA TYPES",
    body: `
      <p>C++ provides several built-in data types. Each type has a specific size and range.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Fundamental Data Types</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Integer types - whole numbers</span></div>
        <div class="line"><span class="type">int</span> a = <span class="number">42</span>;                 <span class="comment">// 4 bytes, range: -2B to 2B</span></div>
        <div class="line"><span class="type">short</span> b = <span class="number">100</span>;              <span class="comment">// 2 bytes, range: -32,768 to 32,767</span></div>
        <div class="line"><span class="type">long</span> c = <span class="number">100000L</span>;           <span class="comment">// 4-8 bytes, larger range</span></div>
        <div class="line"><span class="type">long</span> <span class="type">long</span> d = <span class="number">10000000000LL</span>; <span class="comment">// 8 bytes, very large</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Unsigned versions (positive only)</span></div>
        <div class="line"><span class="type">unsigned</span> <span class="type">int</span> e = <span class="number">100</span>;      <span class="comment">// 0 to 4.2B</span></div>
        <div class="line"><span class="type">unsigned</span> <span class="type">short</span> f = <span class="number">65535</span>; <span class="comment">// 0 to 65,535</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Floating point types - decimal numbers</span></div>
        <div class="line"><span class="type">float</span> g = <span class="number">3.14f</span>;            <span class="comment">// 4 bytes, 7 decimal digits precision</span></div>
        <div class="line"><span class="type">double</span> h = <span class="number">3.1415926535</span>;   <span class="comment">// 8 bytes, 15 decimal digits precision</span></div>
        <div class="line"><span class="type">long</span> <span class="type">double</span> i = <span class="number">3.141592653589793L</span>; <span class="comment">// 10-16 bytes, highest precision</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Character types</span></div>
        <div class="line"><span class="type">char</span> ch = <span class="string">'A'</span>;             <span class="comment">// 1 byte, stores a single character</span></div>
        <div class="line"><span class="type">char</span> digit = <span class="number">65</span>;            <span class="comment">// Also 'A' (ASCII value 65)</span></div>
        <div class="line"><span class="type">wchar_t</span> wide = <span class="string">L'ك'</span>;       <span class="comment">// Wide character for Unicode</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Boolean type</span></div>
        <div class="line"><span class="type">bool</span> flag = <span class="keyword">true</span>;          <span class="comment">// true or false (1 byte)</span></div>
        <div class="line"><span class="type">bool</span> isDone = <span class="keyword">false</span>;</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Type Modifiers</h3>
      <ul>
        <li><strong>signed:</strong> Can store negative and positive values (default)</li>
        <li><strong>unsigned:</strong> Only positive values (doubles the positive range)</li>
        <li><strong>short:</strong> Reduces size</li>
        <li><strong>long:</strong> Increases size</li>
        <li><strong>const:</strong> Value cannot be changed after initialization</li>
        <li><strong>volatile:</strong> Value may change unexpectedly (for hardware)</li>
      </ul>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Checking Type Sizes</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;climits&gt;</span>   <span class="comment">// For integer limits</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;cfloat&gt;</span>     <span class="comment">// For float limits</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Size of int: "</span> &lt;&lt; <span class="keyword">sizeof</span>(<span class="type">int</span>) &lt;&lt; <span class="string">" bytes"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Size of double: "</span> &lt;&lt; <span class="keyword">sizeof</span>(<span class="type">double</span>) &lt;&lt; <span class="string">" bytes"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"int min: "</span> &lt;&lt; INT_MIN &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"int max: "</span> &lt;&lt; INT_MAX &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Type Aliases (typedef and using)</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Traditional typedef</span></div>
        <div class="line"><span class="keyword">typedef</span> <span class="type">unsigned</span> <span class="type">int</span> uint;</div>
        <div class="line">uint age = <span class="number">25</span>;  <span class="comment">// Same as unsigned int</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Modern 'using' (C++11) - preferred</span></div>
        <div class="line"><span class="keyword">using</span> ulong = <span class="type">unsigned</span> <span class="type">long</span>;</div>
        <div class="line">ulong large = <span class="number">100000UL</span>;</div>
      </div>
    `,
  },

  variables: {
    title: "📦 VARIABLES & CONSTANTS",
    body: `
      <p>Variables store data values. Constants cannot be changed after initialization.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Variable Declaration and Initialization</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Different ways to initialize variables</span></div>
        <div class="line"><span class="type">int</span> age = <span class="number">25</span>;                 <span class="comment">// C-style initialization</span></div>
        <div class="line"><span class="type">double</span> salary(<span class="number">55000.50</span>);      <span class="comment">// Constructor-style</span></div>
        <div class="line"><span class="type">char</span> grade{<span class="string">'A'</span>};               <span class="comment">// Uniform initialization (C++11) - safest</span></div>
        <div class="line"><span class="type">bool</span> isStudent = {<span class="keyword">true</span>};       <span class="comment">// Also uniform</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Multiple declarations</span></div>
        <div class="line"><span class="type">int</span> x = <span class="number">5</span>, y = <span class="number">10</span>, z = <span class="number">15</span>;    <span class="comment">// All int</span></div>
        <div class="line"><span class="type">double</span> a = <span class="number">1.5</span>, b = <span class="number">2.5</span>;       <span class="comment">// Both double</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Constants</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// const - value cannot change</span></div>
        <div class="line"><span class="keyword">const</span> <span class="type">double</span> PI = <span class="number">3.14159</span>;</div>
        <div class="line"><span class="comment">// PI = 3.14;  // ERROR: cannot modify const</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// constexpr - compile-time constant (C++11)</span></div>
        <div class="line"><span class="keyword">constexpr</span> <span class="type">int</span> MAX_SIZE = <span class="number">1000</span>;</div>
        <div class="line"><span class="type">int</span> array[MAX_SIZE];  <span class="comment">// Works because MAX_SIZE is compile-time constant</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// #define - preprocessor macro (old C-style)</span></div>
        <div class="line"><span class="keyword">#define</span> BUFFER_SIZE 256</div>
        <div class="line"><span class="type">char</span> buffer[BUFFER_SIZE];</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Auto Type Deduction (C++11)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">auto</span> number = <span class="number">42</span>;         <span class="comment">// int</span></div>
        <div class="line"><span class="keyword">auto</span> pi = <span class="number">3.14159</span>;        <span class="comment">// double</span></div>
        <div class="line"><span class="keyword">auto</span> letter = <span class="string">'A'</span>;        <span class="comment">// char</span></div>
        <div class="line"><span class="keyword">auto</span> name = <span class="string">"C++"</span>;        <span class="comment">// const char*</span></div>
        <div class="line"><span class="keyword">auto</span> flag = <span class="keyword">true</span>;         <span class="comment">// bool</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Useful for complex types</span></div>
        <div class="line">std::vector&lt;<span class="type">int</span>&gt; vec = {<span class="number">1</span>,<span class="number">2</span>,<span class="number">3</span>};</div>
        <div class="line"><span class="keyword">auto</span> it = vec.begin();    <span class="comment">// std::vector&lt;int&gt;::iterator</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Variable Scope</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> globalVar = <span class="number">100</span>;  <span class="comment">// Global scope - accessible everywhere</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">void</span> <span class="function">example</span>() {</div>
        <div class="line">    <span class="type">int</span> localVar = <span class="number">50</span>;  <span class="comment">// Local scope - only in this function</span></div>
        <div class="line">    </div>
        <div class="line">    {</div>
        <div class="line">        <span class="type">int</span> blockVar = <span class="number">10</span>;  <span class="comment">// Block scope - only inside these braces</span></div>
        <div class="line">        <span class="comment">// Can access localVar and globalVar here</span></div>
        <div class="line">    }</div>
        <div class="line">    <span class="comment">// blockVar no longer accessible here</span></div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Static Variables</h3>
      <div class="code-block">
        <div class="line"><span class="type">void</span> <span class="function">counter</span>() {</div>
        <div class="line">    <span class="keyword">static</span> <span class="type">int</span> count = <span class="number">0</span>;  <span class="comment">// Initialized only once</span></div>
        <div class="line">    count++;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Called "</span> &lt;&lt; count &lt;&lt; <span class="string">" times"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="function">counter</span>();  <span class="comment">// Called 1 times</span></div>
        <div class="line"><span class="function">counter</span>();  <span class="comment">// Called 2 times</span></div>
        <div class="line"><span class="function">counter</span>();  <span class="comment">// Called 3 times</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Naming Rules</h3>
      <ul>
        <li><strong>Valid:</strong> letters, digits, underscore (_)</li>
        <li><strong>Cannot start with:</strong> digit</li>
        <li><strong>Case sensitive:</strong> myVar, MyVar, MYVAR are different</li>
        <li><strong>Reserved keywords:</strong> int, class, if, while, etc. (cannot use)</li>
        <li><strong>Convention:</strong> camelCase for variables (myVariableName)</li>
        <li><strong>Convention:</strong> UPPER_CASE for constants (MAX_VALUE)</li>
      </ul>
    `,
  },

  operators: {
    title: "➕ OPERATORS",
    body: `
      <p>C++ provides a rich set of operators for performing operations on data.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Arithmetic Operators</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> a = <span class="number">10</span>, b = <span class="number">3</span>;</div>
        <div class="line"><span class="type">int</span> sum = a + b;        <span class="comment">// Addition: 13</span></div>
        <div class="line"><span class="type">int</span> diff = a - b;       <span class="comment">// Subtraction: 7</span></div>
        <div class="line"><span class="type">int</span> product = a * b;    <span class="comment">// Multiplication: 30</span></div>
        <div class="line"><span class="type">int</span> quotient = a / b;   <span class="comment">// Division: 3 (integer division)</span></div>
        <div class="line"><span class="type">int</span> remainder = a % b;  <span class="comment">// Modulus: 1 (remainder of division)</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">double</span> x = <span class="number">10.0</span>, y = <span class="number">3.0</span>;</div>
        <div class="line"><span class="type">double</span> div = x / y;     <span class="comment">// Floating division: 3.33333</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Assignment Operators</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> x = <span class="number">5</span>;              <span class="comment">// Simple assignment</span></div>
        <div class="line">x += <span class="number">3</span>;                  <span class="comment">// x = x + 3 (now 8)</span></div>
        <div class="line">x -= <span class="number">2</span>;                  <span class="comment">// x = x - 2 (now 6)</span></div>
        <div class="line">x *= <span class="number">4</span>;                  <span class="comment">// x = x * 4 (now 24)</span></div>
        <div class="line">x /= <span class="number">3</span>;                  <span class="comment">// x = x / 3 (now 8)</span></div>
        <div class="line">x %= <span class="number">5</span>;                  <span class="comment">// x = x % 5 (now 3)</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Increment/Decrement Operators</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> i = <span class="number">5</span>;</div>
        <div class="line"><span class="type">int</span> j = i++;  <span class="comment">// Post-increment: j = 5, then i becomes 6</span></div>
        <div class="line"><span class="type">int</span> k = ++i;  <span class="comment">// Pre-increment: i becomes 7, then k = 7</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> m = <span class="number">10</span>;</div>
        <div class="line"><span class="type">int</span> n = m--;  <span class="comment">// Post-decrement: n = 10, m becomes 9</span></div>
        <div class="line"><span class="type">int</span> p = --m;  <span class="comment">// Pre-decrement: m becomes 8, p = 8</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Comparison Operators</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> a = <span class="number">5</span>, b = <span class="number">10</span>;</div>
        <div class="line"><span class="type">bool</span> eq = (a == b);   <span class="comment">// Equal to: false</span></div>
        <div class="line"><span class="type">bool</span> neq = (a != b);  <span class="comment">// Not equal to: true</span></div>
        <div class="line"><span class="type">bool</span> lt = (a &lt; b);    <span class="comment">// Less than: true</span></div>
        <div class="line"><span class="type">bool</span> gt = (a &gt; b);    <span class="comment">// Greater than: false</span></div>
        <div class="line"><span class="type">bool</span> le = (a &lt;= b);   <span class="comment">// Less than or equal: true</span></div>
        <div class="line"><span class="type">bool</span> ge = (a &gt;= b);   <span class="comment">// Greater than or equal: false</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Logical Operators</h3>
      <div class="code-block">
        <div class="line"><span class="type">bool</span> t = <span class="keyword">true</span>, f = <span class="keyword">false</span>;</div>
        <div class="line"><span class="type">bool</span> and1 = t && f;   <span class="comment">// Logical AND: false (both must be true)</span></div>
        <div class="line"><span class="type">bool</span> or1 = t || f;    <span class="comment">// Logical OR: true (at least one true)</span></div>
        <div class="line"><span class="type">bool</span> not1 = !t;       <span class="comment">// Logical NOT: false</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Example with comparisons</span></div>
        <div class="line"><span class="type">int</span> age = <span class="number">25</span>;</div>
        <div class="line"><span class="type">bool</span> canDrive = (age >= <span class="number">18</span>) && (age &lt;= <span class="number">65</span>);  <span class="comment">// true</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Bitwise Operators (low-level)</h3>
      <div class="code-block">
        <div class="line"><span class="type">unsigned</span> <span class="type">int</span> a = <span class="number">5</span>;   <span class="comment">// Binary: 0101</span></div>
        <div class="line"><span class="type">unsigned</span> <span class="type">int</span> b = <span class="number">3</span>;   <span class="comment">// Binary: 0011</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">unsigned</span> <span class="type">int</span> c = a & b;    <span class="comment">// Bitwise AND: 0001 (1)</span></div>
        <div class="line"><span class="type">unsigned</span> <span class="type">int</span> d = a | b;    <span class="comment">// Bitwise OR:  0111 (7)</span></div>
        <div class="line"><span class="type">unsigned</span> <span class="type">int</span> e = a ^ b;    <span class="comment">// Bitwise XOR: 0110 (6)</span></div>
        <div class="line"><span class="type">unsigned</span> <span class="type">int</span> f = ~a;       <span class="comment">// Bitwise NOT: ...11111010 (large)</span></div>
        <div class="line"><span class="type">unsigned</span> <span class="type">int</span> g = a &lt;&lt; <span class="number">1</span>;  <span class="comment">// Left shift: 1010 (10)</span></div>
        <div class="line"><span class="type">unsigned</span> <span class="type">int</span> h = a &gt;&gt; <span class="number">1</span>;  <span class="comment">// Right shift: 0010 (2)</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Ternary (Conditional) Operator</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> x = <span class="number">10</span>, y = <span class="number">20</span>;</div>
        <div class="line"><span class="type">int</span> max = (x > y) ? x : y;  <span class="comment">// If x>y true, max=x else max=y</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Max is "</span> &lt;&lt; max;  <span class="comment">// Max is 20</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Can be nested (but careful with readability)</span></div>
        <div class="line"><span class="type">int</span> result = (x > <span class="number">0</span>) ? (x < <span class="number">100</span>) ? x : <span class="number">100</span> : <span class="number">0</span>;</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 sizeof Operator</h3>
      <div class="code-block">
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Size of int: "</span> &lt;&lt; <span class="keyword">sizeof</span>(<span class="type">int</span>) &lt;&lt; <span class="function">endl</span>;  <span class="comment">// Usually 4</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Size of double: "</span> &lt;&lt; <span class="keyword">sizeof</span>(<span class="type">double</span>) &lt;&lt; <span class="function">endl</span>;  <span class="comment">// Usually 8</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> arr[<span class="number">10</span>];</div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Array size: "</span> &lt;&lt; <span class="keyword">sizeof</span>(arr) / <span class="keyword">sizeof</span>(arr[<span class="number">0</span>]);  <span class="comment">// 10</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Operator Precedence</h3>
      <p>Operators have precedence (which operation happens first):</p>
      <div class="code-block">
        <div class="line"><span class="type">int</span> result = <span class="number">5</span> + <span class="number">3</span> * <span class="number">2</span>;      <span class="comment">// 11 (not 16) because * has higher precedence</span></div>
        <div class="line"><span class="type">int</span> result2 = (<span class="number">5</span> + <span class="number">3</span>) * <span class="number">2</span>;    <span class="comment">// 16 (parentheses override precedence)</span></div>
      </div>
      <p><strong>Precedence order (highest to lowest):</strong> () → *, /, % → +, - → &lt;&lt;, &gt;&gt; → &lt;, &lt;=, &gt;, &gt;= → ==, != → && → || → =</p>
    `,
  },

  io: {
    title: "📝 INPUT/OUTPUT",
    body: `
      <p>C++ uses streams for input and output operations through the iostream library.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Output (cout)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span></div>
        <div class="line"><span class="keyword">using namespace</span> std;</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// Simple output</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Hello, World!"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Output with multiple items</span></div>
        <div class="line">    <span class="type">int</span> age = <span class="number">25</span>;</div>
        <div class="line">    <span class="type">double</span> salary = <span class="number">55000.50</span>;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Age: "</span> &lt;&lt; age &lt;&lt; <span class="string">", Salary: $"</span> &lt;&lt; salary &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Output without newline</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"This "</span>;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"is "</span>;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"one line"</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Input (cin)</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="type">string</span> name;</div>
        <div class="line">    <span class="type">int</span> age;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Prompt user</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Enter your name: "</span>;</div>
        <div class="line">    <span class="function">cin</span> >> name;  <span class="comment">// Reads until whitespace</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Enter your age: "</span>;</div>
        <div class="line">    <span class="function">cin</span> >> age;</div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Hello, "</span> &lt;&lt; name &lt;&lt; <span class="string">"! You are "</span> &lt;&lt; age &lt;&lt; <span class="string">" years old."</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Reading Full Lines (getline)</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="type">string</span> fullName;</div>
        <div class="line">    <span class="type">string</span> address;</div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Enter your full name: "</span>;</div>
        <div class="line">    <span class="function">getline</span>(<span class="function">cin</span>, fullName);  <span class="comment">// Reads entire line including spaces</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Enter your address: "</span>;</div>
        <div class="line">    <span class="function">getline</span>(<span class="function">cin</span>, address);</div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Name: "</span> &lt;&lt; fullName &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Address: "</span> &lt;&lt; address &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Note: if you used cin >> before getline, you need to clear the buffer</span></div>
        <div class="line">    <span class="function">cin.ignore</span>();  <span class="comment">// Clears the newline left by cin</span></div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Formatting Output</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;iomanip&gt;</span>  <span class="comment">// For manipulators</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="type">double</span> pi = <span class="number">3.1415926535</span>;</div>
        <div class="line">    <span class="type">int</span> num = <span class="number">255</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Set precision</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">fixed</span> &lt;&lt; <span class="function">setprecision</span>(<span class="number">2</span>);</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Pi with 2 decimals: "</span> &lt;&lt; pi &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 3.14</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Set width and fill</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">setw</span>(<span class="number">10</span>) &lt;&lt; <span class="function">setfill</span>(<span class="string">'*'</span>) &lt;&lt; num &lt;&lt; <span class="function">endl</span>;  <span class="comment">// *******255</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Different number bases</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Decimal: "</span> &lt;&lt; num &lt;&lt; <span class="function">endl</span>;           <span class="comment">// 255</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Hexadecimal: "</span> &lt;&lt; <span class="function">hex</span> &lt;&lt; num &lt;&lt; <span class="function">endl</span>;   <span class="comment">// ff</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Octal: "</span> &lt;&lt; <span class="function">oct</span> &lt;&lt; num &lt;&lt; <span class="function">endl</span>;       <span class="comment">// 377</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">dec</span>;  <span class="comment">// Back to decimal</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Error Output (cerr) and Logging (clog)</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// cerr for errors (unbuffered, immediate output)</span></div>
        <div class="line">    <span class="function">cerr</span> &lt;&lt; <span class="string">"Error: File not found!"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// clog for logging (buffered)</span></div>
        <div class="line">    <span class="function">clog</span> &lt;&lt; <span class="string">"Log: Program started"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Practical example</span></div>
        <div class="line">    <span class="type">int</span> divisor;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Enter a divisor: "</span>;</div>
        <div class="line">    <span class="function">cin</span> >> divisor;</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">if</span> (divisor == <span class="number">0</span>) {</div>
        <div class="line">        <span class="function">cerr</span> &lt;&lt; <span class="string">"Error: Cannot divide by zero!"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">        <span class="keyword">return</span> <span class="number">1</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Reading Multiple Values</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="type">int</span> a, b, c;</div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Enter three numbers separated by spaces: "</span>;</div>
        <div class="line">    <span class="function">cin</span> >> a >> b >> c;  <span class="comment">// Reads three integers</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Sum: "</span> &lt;&lt; a + b + c &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Reading until end of file</span></div>
        <div class="line">    <span class="type">int</span> value;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Enter numbers (Ctrl+D to stop):"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="keyword">while</span> (<span class="function">cin</span> >> value) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"You entered: "</span> &lt;&lt; value &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Input Validation</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="type">int</span> age;</div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Enter your age: "</span>;</div>
        <div class="line">    <span class="function">cin</span> >> age;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Check if input failed</span></div>
        <div class="line">    <span class="keyword">if</span> (<span class="function">cin.fail</span>()) {</div>
        <div class="line">        <span class="function">cerr</span> &lt;&lt; <span class="string">"Invalid input!"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">        <span class="function">cin.clear</span>();  <span class="comment">// Clear error state</span></div>
        <div class="line">        <span class="function">cin.ignore</span>(<span class="number">10000</span>, <span class="string">'\n'</span>);  <span class="comment">// Discard invalid input</span></div>
        <div class="line">        <span class="keyword">return</span> <span class="number">1</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Your age is "</span> &lt;&lt; age &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
    `,
  },

  // ==================== يمكن إضافة باقي المفاهيم بنفس النمط ====================

  control: {
    title: "🎮 CONTROL STRUCTURES",
    body: `
      <p>Control structures determine the flow of program execution.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 if-else Statement</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> score = <span class="number">85</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">if</span> (score >= <span class="number">90</span>) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Grade A"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">} <span class="keyword">else if</span> (score >= <span class="number">80</span>) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Grade B"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">} <span class="keyword">else if</span> (score >= <span class="number">70</span>) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Grade C"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">} <span class="keyword">else</span> {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Grade F"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 switch Statement</h3>
      <div class="code-block">
        <div class="line"><span class="type">char</span> grade = <span class="string">'B'</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">switch</span>(grade) {</div>
        <div class="line">    <span class="keyword">case</span> <span class="string">'A'</span>:</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Excellent!"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">        <span class="keyword">break</span>;</div>
        <div class="line">    <span class="keyword">case</span> <span class="string">'B'</span>:</div>
        <div class="line">    <span class="keyword">case</span> <span class="string">'C'</span>:</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Good!"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">        <span class="keyword">break</span>;</div>
        <div class="line">    <span class="keyword">case</span> <span class="string">'D'</span>:</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"You passed"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">        <span class="keyword">break</span>;</div>
        <div class="line">    <span class="keyword">default</span>:</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Invalid grade"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
      </div>
    `,
  },

  loops: {
    title: "🔄 LOOPS",
    body: `
      <p>Loops execute code repeatedly based on a condition.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 for Loop</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Syntax: for(initialization; condition; increment)</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; <span class="number">5</span>; i++) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Iteration "</span> &lt;&lt; i &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Multiple variables</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>, j = <span class="number">10</span>; i &lt; j; i++, j--) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"i="</span> &lt;&lt; i &lt;&lt; <span class="string">", j="</span> &lt;&lt; j &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Range-based for loop (C++11)</span></div>
        <div class="line"><span class="type">int</span> arr[] = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};</div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> num : arr) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; num &lt;&lt; <span class="string">" "</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 while Loop</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> count = <span class="number">0</span>;</div>
        <div class="line"><span class="keyword">while</span> (count &lt; <span class="number">5</span>) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Count: "</span> &lt;&lt; count &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    count++;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 do-while Loop</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> x = <span class="number">0</span>;</div>
        <div class="line"><span class="keyword">do</span> {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"x = "</span> &lt;&lt; x &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    x++;</div>
        <div class="line">} <span class="keyword">while</span> (x &lt; <span class="number">5</span>);  <span class="comment">// Note semicolon</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Executes at least once</span></div>
        <div class="line"><span class="type">int</span> y = <span class="number">10</span>;</div>
        <div class="line"><span class="keyword">do</span> {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"This will print once even though y=10"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    y++;</div>
        <div class="line">} <span class="keyword">while</span> (y &lt; <span class="number">5</span>);</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Loop Control: break and continue</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// break - exits the loop</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; <span class="number">10</span>; i++) {</div>
        <div class="line">    <span class="keyword">if</span> (i == <span class="number">5</span>) <span class="keyword">break</span>;  <span class="comment">// Loop stops when i=5</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; i &lt;&lt; <span class="string">" "</span>;  <span class="comment">// Prints: 0 1 2 3 4</span></div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// continue - skips current iteration</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; <span class="number">10</span>; i++) {</div>
        <div class="line">    <span class="keyword">if</span> (i % <span class="number">2</span> == <span class="number">0</span>) <span class="keyword">continue</span>;  <span class="comment">// Skip even numbers</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; i &lt;&lt; <span class="string">" "</span>;  <span class="comment">// Prints: 1 3 5 7 9</span></div>
        <div class="line">}</div>
      </div>
    `,
  },

  arrays: {
    title: "📋 ARRAYS",
    body: `
      <p>Arrays store multiple values of the same type in contiguous memory locations.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 One-Dimensional Arrays</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Declaration and initialization</span></div>
        <div class="line"><span class="type">int</span> numbers[<span class="number">5</span>];  <span class="comment">// Declares array of 5 integers (uninitialized)</span></div>
        <div class="line"><span class="type">int</span> scores[<span class="number">3</span>] = {<span class="number">95</span>, <span class="number">87</span>, <span class="number">92</span>};  <span class="comment">// Initialize with values</span></div>
        <div class="line"><span class="type">int</span> values[] = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};  <span class="comment">// Size automatically determined</span></div>
        <div class="line"><span class="type">int</span> zeros[<span class="number">10</span>] = {<span class="number">0</span>};  <span class="comment">// All elements initialized to 0</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Accessing elements (zero-indexed)</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; scores[<span class="number">0</span>];  <span class="comment">// First element: 95</span></div>
        <div class="line">scores[<span class="number">1</span>] = <span class="number">90</span>;      <span class="comment">// Modify second element</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Array size calculation</span></div>
        <div class="line"><span class="type">int</span> size = <span class="keyword">sizeof</span>(values) / <span class="keyword">sizeof</span>(values[<span class="number">0</span>]);  <span class="comment">// 5</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Iterating through array</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; size; i++) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"values["</span> &lt;&lt; i &lt;&lt; <span class="string">"] = "</span> &lt;&lt; values[i] &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Multidimensional Arrays</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// 2D array (matrix)</span></div>
        <div class="line"><span class="type">int</span> matrix[<span class="number">3</span>][<span class="number">4</span>] = {</div>
        <div class="line">    {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>},   <span class="comment">// Row 0</span></div>
        <div class="line">    {<span class="number">5</span>, <span class="number">6</span>, <span class="number">7</span>, <span class="number">8</span>},   <span class="comment">// Row 1</span></div>
        <div class="line">    {<span class="number">9</span>, <span class="number">10</span>, <span class="number">11</span>, <span class="number">12</span>}  <span class="comment">// Row 2</span></div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Accessing elements</span></div>
        <div class="line"><span class="type">int</span> value = matrix[<span class="number">1</span>][<span class="number">2</span>];  <span class="comment">// Row 1, Column 2: 7</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Nested loops for 2D arrays</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; <span class="number">3</span>; i++) {</div>
        <div class="line">    <span class="keyword">for</span> (<span class="type">int</span> j = <span class="number">0</span>; j &lt; <span class="number">4</span>; j++) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; matrix[i][j] &lt;&lt; <span class="string">"\t"</span>;</div>
        <div class="line">    }</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Arrays and Functions</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Passing array to function (decays to pointer)</span></div>
        <div class="line"><span class="type">void</span> <span class="function">printArray</span>(<span class="type">int</span> arr[], <span class="type">int</span> size) {</div>
        <div class="line">    <span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; size; i++) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; arr[i] &lt;&lt; <span class="string">" "</span>;</div>
        <div class="line">    }</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Modifying array in function</span></div>
        <div class="line"><span class="type">void</span> <span class="function">doubleElements</span>(<span class="type">int</span> arr[], <span class="type">int</span> size) {</div>
        <div class="line">    <span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; size; i++) {</div>
        <div class="line">        arr[i] *= <span class="number">2</span>;  <span class="comment">// Modifies original array</span></div>
        <div class="line">    }</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="type">int</span> nums[] = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};</div>
        <div class="line">    <span class="type">int</span> size = <span class="keyword">sizeof</span>(nums) / <span class="keyword">sizeof</span>(nums[<span class="number">0</span>]);</div>
        <div class="line">    </div>
        <div class="line">    <span class="function">printArray</span>(nums, size);       <span class="comment">// 1 2 3 4 5</span></div>
        <div class="line">    <span class="function">doubleElements</span>(nums, size);   <span class="comment">// Modify</span></div>
        <div class="line">    <span class="function">printArray</span>(nums, size);       <span class="comment">// 2 4 6 8 10</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
    `,
  },

  strings: {
    title: "📎 STRINGS",
    body: `
      <p>C++ provides two ways to work with strings: C-style strings and the std::string class.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 C-style Strings (Character Arrays)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;cstring&gt;</span>  <span class="comment">// For string functions</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Declaration and initialization</span></div>
        <div class="line"><span class="type">char</span> str1[] = <span class="string">"Hello"</span>;           <span class="comment">// Size automatically 6 (includes '\\0')</span></div>
        <div class="line"><span class="type">char</span> str2[<span class="number">20</span>] = <span class="string">"World"</span>;        <span class="comment">// Fixed size array</span></div>
        <div class="line"><span class="type">const</span> <span class="type">char</span>* str3 = <span class="string">"C++"</span>;       <span class="comment">// Pointer to string literal</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// String operations</span></div>
        <div class="line"><span class="function">strcpy</span>(str2, str1);               <span class="comment">// Copy str1 to str2</span></div>
        <div class="line"><span class="function">strcat</span>(str2, <span class="string">" "</span>);               <span class="comment">// Concatenate</span></div>
        <div class="line"><span class="function">strcat</span>(str2, str3);               <span class="comment">// str2 now "Hello C++"</span></div>
        <div class="line"><span class="type">int</span> len = <span class="function">strlen</span>(str2);          <span class="comment">// Length: 9 (not including '\\0')</span></div>
        <div class="line"><span class="type">int</span> cmp = <span class="function">strcmp</span>(str1, <span class="string">"Hello"</span>);  <span class="comment">// 0 if equal</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 C++ String Class (std::string)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;string&gt;</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span></div>
        <div class="line"><span class="keyword">using namespace</span> std;</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// Different ways to create strings</span></div>
        <div class="line">    <span class="type">string</span> s1;                       <span class="comment">// Empty string</span></div>
        <div class="line">    <span class="type">string</span> s2(<span class="string">"Hello"</span>);              <span class="comment">// From C-string</span></div>
        <div class="line">    <span class="type">string</span> s3 = <span class="string">"World"</span>;              <span class="comment">// Assignment</span></div>
        <div class="line">    <span class="type">string</span> s4(s2);                    <span class="comment">// Copy constructor</span></div>
        <div class="line">    <span class="type">string</span> s5(<span class="number">5</span>, <span class="string">'*'</span>);                <span class="comment">// "*****"</span></div>
        <div class="line">    <span class="type">string</span> s6 = s2 + <span class="string">" "</span> + s3;        <span class="comment">// "Hello World"</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Basic operations</span></div>
        <div class="line">    <span class="type">int</span> len = s6.length();            <span class="comment">// Length: 11</span></div>
        <div class="line">    <span class="type">bool</span> empty = s1.empty();          <span class="comment">// true</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Accessing characters</span></div>
        <div class="line">    <span class="type">char</span> ch1 = s6[<span class="number">0</span>];                 <span class="comment">// 'H' (no bounds check)</span></div>
        <div class="line">    <span class="type">char</span> ch2 = s6.<span class="function">at</span>(<span class="number">0</span>);              <span class="comment">// 'H' (with bounds check)</span></div>
        <div class="line">    s6[<span class="number">0</span>] = <span class="string">'J'</span>;                      <span class="comment">// Modify: "Jello World"</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Searching</span></div>
        <div class="line">    <span class="type">size_t</span> pos = s6.<span class="function">find</span>(<span class="string">"World"</span>);   <span class="comment">// Position: 6</span></div>
        <div class="line">    <span class="keyword">if</span> (pos != <span class="type">string</span>::npos) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Found at "</span> &lt;&lt; pos &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Substring</span></div>
        <div class="line">    <span class="type">string</span> sub = s6.<span class="function">substr</span>(<span class="number">6</span>, <span class="number">5</span>);    <span class="comment">// "World"</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Inserting and erasing</span></div>
        <div class="line">    s6.<span class="function">insert</span>(<span class="number">5</span>, <span class="string">" beautiful"</span>);      <span class="comment">// "Jello beautiful World"</span></div>
        <div class="line">    s6.<span class="function">erase</span>(<span class="number">5</span>, <span class="number">10</span>);                 <span class="comment">// Back to "Jello World"</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Comparison</span></div>
        <div class="line">    <span class="keyword">if</span> (s2 == <span class="string">"Hello"</span>) {             <span class="comment">// Direct comparison</span></div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Equal"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Conversion to C-string</span></div>
        <div class="line">    <span class="type">const</span> <span class="type">char</span>* cstr = s6.<span class="function">c_str</span>();   <span class="comment">// For C functions</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 String Streams</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;sstream&gt;</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// String to number conversion</span></div>
        <div class="line">    <span class="type">string</span> numStr = <span class="string">"123"</span>;</div>
        <div class="line">    <span class="type">int</span> num;</div>
        <div class="line">    <span class="type">stringstream</span>(numStr) >> num;    <span class="comment">// Convert to int</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Number to string conversion</span></div>
        <div class="line">    <span class="type">double</span> pi = <span class="number">3.14159</span>;</div>
        <div class="line">    <span class="type">stringstream</span> ss;</div>
        <div class="line">    ss &lt;&lt; <span class="string">"Pi = "</span> &lt;&lt; pi;</div>
        <div class="line">    <span class="type">string</span> result = ss.<span class="function">str</span>();        <span class="comment">// "Pi = 3.14159"</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Parsing comma-separated values</span></div>
        <div class="line">    <span class="type">string</span> data = <span class="string">"10,20,30,40,50"</span>;</div>
        <div class="line">    <span class="type">stringstream</span> dataStream(data);</div>
        <div class="line">    <span class="type">int</span> value;</div>
        <div class="line">    <span class="type">char</span> comma;</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">while</span> (dataStream >> value) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; value &lt;&lt; <span class="string">" "</span>;        <span class="comment">// 10 20 30 40 50</span></div>
        <div class="line">        dataStream >> comma;           <span class="comment">// Skip comma</span></div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
    `,
  },

  functions: {
    title: "⚙️ FUNCTIONS",
    body: `
      <p>Functions are reusable blocks of code that perform specific tasks.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Function Structure</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// return_type function_name(parameters) { body }</span></div>
        <div class="line"><span class="type">int</span> <span class="function">add</span>(<span class="type">int</span> a, <span class="type">int</span> b) {</div>
        <div class="line">    <span class="keyword">return</span> a + b;  <span class="comment">// Returns the sum</span></div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">void</span> <span class="function">greet</span>() {  <span class="comment">// void means no return value</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Hello!"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="type">int</span> result = <span class="function">add</span>(<span class="number">5</span>, <span class="number">3</span>);  <span class="comment">// Function call</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Sum: "</span> &lt;&lt; result &lt;&lt; <span class="function">endl</span>;  <span class="comment">// Sum: 8</span></div>
        <div class="line">    <span class="function">greet</span>();  <span class="comment">// Hello!</span></div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Function Declaration vs Definition</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Function declaration (prototype) - tells compiler about function</span></div>
        <div class="line"><span class="type">int</span> <span class="function">multiply</span>(<span class="type">int</span> x, <span class="type">int</span> y);</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Function definition - actual implementation</span></div>
        <div class="line"><span class="type">int</span> <span class="function">multiply</span>(<span class="type">int</span> x, <span class="type">int</span> y) {</div>
        <div class="line">    <span class="keyword">return</span> x * y;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Parameters and Arguments</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Pass by value (copy) - original not modified</span></div>
        <div class="line"><span class="type">void</span> <span class="function">byValue</span>(<span class="type">int</span> x) {</div>
        <div class="line">    x = <span class="number">100</span>;  <span class="comment">// Modifies only the copy</span></div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Pass by reference - original can be modified</span></div>
        <div class="line"><span class="type">void</span> <span class="function">byReference</span>(<span class="type">int</span>& x) {</div>
        <div class="line">    x = <span class="number">100</span>;  <span class="comment">// Modifies original</span></div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Pass by const reference (for large objects) - efficient and safe</span></div>
        <div class="line"><span class="type">void</span> <span class="function">printString</span>(<span class="keyword">const</span> <span class="type">string</span>& s) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; s &lt;&lt; <span class="function">endl</span>;  <span class="comment">// Cannot modify s</span></div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="type">int</span> a = <span class="number">5</span>, b = <span class="number">5</span>;</div>
        <div class="line">    <span class="function">byValue</span>(a);</div>
        <div class="line">    <span class="function">byReference</span>(b);</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"a: "</span> &lt;&lt; a &lt;&lt; <span class="string">", b: "</span> &lt;&lt; b &lt;&lt; <span class="function">endl</span>;  <span class="comment">// a: 5, b: 100</span></div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Default Parameters</h3>
      <div class="code-block">
        <div class="line"><span class="type">void</span> <span class="function">display</span>(<span class="type">string</span> msg, <span class="type">int</span> times = <span class="number">1</span>, <span class="type">char</span> separator = <span class="string">'\n'</span>) {</div>
        <div class="line">    <span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; times; i++) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; msg;</div>
        <div class="line">        <span class="keyword">if</span> (i &lt; times - <span class="number">1</span>) <span class="function">cout</span> &lt;&lt; separator;</div>
        <div class="line">    }</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="function">display</span>(<span class="string">"Hello"</span>);                 <span class="comment">// Hello (once)</span></div>
        <div class="line"><span class="function">display</span>(<span class="string">"Hi"</span>, <span class="number">3</span>);                  <span class="comment">// HiHiHi (newline separator)</span></div>
        <div class="line"><span class="function">display</span>(<span class="string">"Bye"</span>, <span class="number">2</span>, <span class="string">' '</span>);            <span class="comment">// Bye Bye (space separator)</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Function Overloading</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Same function name, different parameters</span></div>
        <div class="line"><span class="type">int</span> <span class="function">max</span>(<span class="type">int</span> a, <span class="type">int</span> b) {</div>
        <div class="line">    <span class="keyword">return</span> (a > b) ? a : b;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">double</span> <span class="function">max</span>(<span class="type">double</span> a, <span class="type">double</span> b) {</div>
        <div class="line">    <span class="keyword">return</span> (a > b) ? a : b;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">max</span>(<span class="type">int</span> a, <span class="type">int</span> b, <span class="type">int</span> c) {</div>
        <div class="line">    <span class="keyword">return</span> <span class="function">max</span>(<span class="function">max</span>(a, b), c);</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">max</span>(<span class="number">5</span>, <span class="number">3</span>) &lt;&lt; <span class="function">endl</span>;        <span class="comment">// Calls int version: 5</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">max</span>(<span class="number">5.7</span>, <span class="number">2.3</span>) &lt;&lt; <span class="function">endl</span>;    <span class="comment">// Calls double version: 5.7</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">max</span>(<span class="number">5</span>, <span class="number">3</span>, <span class="number">8</span>) &lt;&lt; <span class="function">endl</span>;     <span class="comment">// Calls 3-param version: 8</span></div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Inline Functions</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Suggestion to compiler to replace call with code (for small functions)</span></div>
        <div class="line"><span class="keyword">inline</span> <span class="type">int</span> <span class="function">square</span>(<span class="type">int</span> x) {</div>
        <div class="line">    <span class="keyword">return</span> x * x;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Compiler may replace square(5) with 5*5 directly</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Recursion</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Function calls itself</span></div>
        <div class="line"><span class="type">int</span> <span class="function">factorial</span>(<span class="type">int</span> n) {</div>
        <div class="line">    <span class="keyword">if</span> (n &lt;= <span class="number">1</span>) <span class="keyword">return</span> <span class="number">1</span>;  <span class="comment">// Base case</span></div>
        <div class="line">    <span class="keyword">return</span> n * <span class="function">factorial</span>(n - <span class="number">1</span>);  <span class="comment">// Recursive call</span></div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Fibonacci sequence</span></div>
        <div class="line"><span class="type">int</span> <span class="function">fibonacci</span>(<span class="type">int</span> n) {</div>
        <div class="line">    <span class="keyword">if</span> (n &lt;= <span class="number">1</span>) <span class="keyword">return</span> n;</div>
        <div class="line">    <span class="keyword">return</span> <span class="function">fibonacci</span>(n - <span class="number">1</span>) + <span class="function">fibonacci</span>(n - <span class="number">2</span>);</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">factorial</span>(<span class="number">5</span>) &lt;&lt; <span class="function">endl</span>;    <span class="comment">// 120</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="function">fibonacci</span>(<span class="number">7</span>) &lt;&lt; <span class="function">endl</span>;    <span class="comment">// 13</span></div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
    `,
  },

  // ==================== Pointer Section (مثال متقدم) ====================
  pointers: {
    title: "👉 POINTERS",
    body: `
      <p>Pointers are variables that store memory addresses. They are a powerful feature of C++ that gives you direct access to memory.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Pointer Concepts</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> x = <span class="number">42</span>;</div>
        <div class="line"><span class="type">int</span>* ptr = &x;      <span class="comment">// ptr stores the address of x (& = address-of operator)</span></div>
        <div class="line"> </div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Value of x: "</span> &lt;&lt; x &lt;&lt; <span class="function">endl</span>;       <span class="comment">// 42</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Address of x: "</span> &lt;&lt; &x &lt;&lt; <span class="function">endl</span>;    <span class="comment">// 0x7ffd5f4b3a84 (example)</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Value of ptr: "</span> &lt;&lt; ptr &lt;&lt; <span class="function">endl</span>;    <span class="comment">// Same address</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Value pointed by ptr: "</span> &lt;&lt; *ptr &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 42 (* = dereference operator)</span></div>
        <div class="line"> </div>
        <div class="line">*ptr = <span class="number">100</span>;  <span class="comment">// Modify x through pointer</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"New value of x: "</span> &lt;&lt; x &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 100</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Null Pointers</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span>* ptr1 = <span class="keyword">nullptr</span>;   <span class="comment">// Modern C++ (since C++11)</span></div>
        <div class="line"><span class="type">int</span>* ptr2 = <span class="literal">NULL</span>;       <span class="comment">// Old C-style (still works)</span></div>
        <div class="line"><span class="type">int</span>* ptr3 = <span class="number">0</span>;           <span class="comment">// Also valid</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Always check before dereferencing</span></div>
        <div class="line"><span class="keyword">if</span> (ptr1 != <span class="keyword">nullptr</span>) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; *ptr1 &lt;&lt; <span class="function">endl</span>;  <span class="comment">// Safe</span></div>
        <div class="line">} <span class="keyword">else</span> {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Pointer is null"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Pointers and Arrays</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> arr[] = {<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>, <span class="number">50</span>};</div>
        <div class="line"><span class="type">int</span>* p = arr;  <span class="comment">// Points to first element (no & needed)</span></div>
        <div class="line"> </div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"First element: "</span> &lt;&lt; *p &lt;&lt; <span class="function">endl</span>;        <span class="comment">// 10</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Second element: "</span> &lt;&lt; *(p + <span class="number">1</span>) &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 20</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Pointer arithmetic</span></div>
        <div class="line">p++;  <span class="comment">// Now points to arr[1]</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Now points to: "</span> &lt;&lt; *p &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 20</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Iterating through array with pointer</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span>* ptr = arr; ptr &lt; arr + <span class="number">5</span>; ptr++) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; *ptr &lt;&lt; <span class="string">" "</span>;  <span class="comment">// 10 20 30 40 50</span></div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Pointers to Pointers</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> x = <span class="number">42</span>;</div>
        <div class="line"><span class="type">int</span>* p = &x;     <span class="comment">// Pointer to int</span></div>
        <div class="line"><span class="type">int</span>** pp = &p;   <span class="comment">// Pointer to pointer to int</span></div>
        <div class="line"> </div>
        <div class="line"><span class="function">cout</span> &lt;&lt; **pp &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 42 (double dereference)</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Pointers and Functions</h3>
      <div class="code-block">
        <div class="line"><span class="type">void</span> <span class="function">swap</span>(<span class="type">int</span>* a, <span class="type">int</span>* b) {</div>
        <div class="line">    <span class="type">int</span> temp = *a;</div>
        <div class="line">    *a = *b;</div>
        <div class="line">    *b = temp;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> x = <span class="number">5</span>, y = <span class="number">10</span>;</div>
        <div class="line"><span class="function">swap</span>(&x, &y);  <span class="comment">// Pass addresses</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"x: "</span> &lt;&lt; x &lt;&lt; <span class="string">", y: "</span> &lt;&lt; y &lt;&lt; <span class="function">endl</span>;  <span class="comment">// x: 10, y: 5</span></div>
      </div>
      
      <div class="note mt-4 p-3 bg-yellow-900 text-white">
        ⚠️ <strong>Important Pointer Safety Rules:</strong>
        <ul class="mt-2">
          <li>Always initialize pointers before using them</li>
          <li>Check for nullptr before dereferencing</li>
          <li>Be careful with pointer arithmetic (don't go out of bounds)</li>
          <li>Free dynamically allocated memory to avoid leaks</li>
        </ul>
      </div>
    `,
  },
  references: {
    title: "🔗 REFERENCES",
    body: `
    <p>References are aliases to existing variables. They provide a safer alternative to pointers for many use cases.</p>
    
    <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Reference Concepts</h3>
    <div class="code-block">
      <div class="line"><span class="type">int</span> a = <span class="number">10</span>;</div>
      <div class="line"><span class="type">int</span>& ref = a;       <span class="comment">// ref is a reference to a (must be initialized)</span></div>
      <div class="line"> </div>
      <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"a = "</span> &lt;&lt; a &lt;&lt; <span class="function">endl</span>;    <span class="comment">// 10</span></div>
      <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"ref = "</span> &lt;&lt; ref &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 10</span></div>
      <div class="line"> </div>
      <div class="line">ref = <span class="number">20</span>;  <span class="comment">// Modifies a through the reference</span></div>
      <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"a after modification: "</span> &lt;&lt; a &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 20</span></div>
    </div>
    
    <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 References vs Pointers</h3>
    <div class="code-block">
      <div class="line"><span class="comment">// Key differences:</span></div>
      <div class="line"><span class="type">int</span> x = <span class="number">5</span>;</div>
      <div class="line"> </div>
      <div class="line"><span class="comment">// 1. Reference must be initialized when declared</span></div>
      <div class="line"><span class="type">int</span>& ref = x;     <span class="comment">// ✅ OK</span></div>
      <div class="line"><span class="type">int</span>& ref2;        <span class="comment">// ❌ ERROR: must be initialized</span></div>
      <div class="line"> </div>
      <div class="line"><span class="comment">// 2. Pointer can be declared without initialization</span></div>
      <div class="line"><span class="type">int</span>* ptr;         <span class="comment">// ✅ OK (but contains garbage)</span></div>
      <div class="line">ptr = &x;          <span class="comment">// Now points to x</span></div>
      <div class="line"> </div>
      <div class="line"><span class="comment">// 3. Reference cannot be reassigned to another variable</span></div>
      <div class="line"><span class="type">int</span> y = <span class="number">10</span>;</div>
      <div class="line">ref = y;  <span class="comment">// This doesn't make ref refer to y! It assigns y's value to x</span></div>
      <div class="line"><span class="comment">// x becomes 10, but ref still refers to x</span></div>
      <div class="line"> </div>
      <div class="line"><span class="comment">// 4. Pointer can be reassigned</span></div>
      <div class="line">ptr = &y;  <span class="comment">// Now ptr points to y (OK)</span></div>
    </div>
    
    <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 References as Function Parameters</h3>
    <div class="code-block">
      <div class="line"><span class="comment">// Pass by reference (most common use)</span></div>
      <div class="line"><span class="type">void</span> <span class="function">swap</span>(<span class="type">int</span>& a, <span class="type">int</span>& b) {</div>
      <div class="line">    <span class="type">int</span> temp = a;</div>
      <div class="line">    a = b;</div>
      <div class="line">    b = temp;</div>
      <div class="line">}</div>
      <div class="line"> </div>
      <div class="line"><span class="type">int</span> x = <span class="number">5</span>, y = <span class="number">10</span>;</div>
      <div class="line"><span class="function">swap</span>(x, y);  <span class="comment">// No & needed when calling</span></div>
      <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"x: "</span> &lt;&lt; x &lt;&lt; <span class="string">", y: "</span> &lt;&lt; y &lt;&lt; <span class="function">endl</span>;  <span class="comment">// x: 10, y: 5</span></div>
    </div>
    
    <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Const References (for efficiency)</h3>
    <div class="code-block">
      <div class="line"><span class="comment">// Pass large objects without copying (efficient)</span></div>
      <div class="line"><span class="type">void</span> <span class="function">printVector</span>(<span class="keyword">const</span> std::vector&lt;<span class="type">int</span>&gt;& vec) {</div>
      <div class="line">    <span class="comment">// vec is read-only (const)</span></div>
      <div class="line">    <span class="keyword">for</span> (<span class="type">int</span> val : vec) {</div>
      <div class="line">        <span class="function">cout</span> &lt;&lt; val &lt;&lt; <span class="string">" "</span>;</div>
      <div class="line">    }</div>
      <div class="line">    <span class="comment">// vec.push_back(10);  // ❌ ERROR: cannot modify const reference</span></div>
      <div class="line">}</div>
    </div>
    
    <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Returning References</h3>
    <div class="code-block">
      <div class="line"><span class="keyword">class</span> <span class="type">Array</span> {</div>
      <div class="line"><span class="keyword">private</span>:</div>
      <div class="line">    <span class="type">int</span> data[<span class="number">10</span>];</div>
      <div class="line"><span class="keyword">public</span>:</div>
      <div class="line">    <span class="comment">// Return reference to allow modification</span></div>
      <div class="line">    <span class="type">int</span>& <span class="function">operator[]</span>(<span class="type">int</span> index) {</div>
      <div class="line">        <span class="keyword">return</span> data[index];</div>
      <div class="line">    }</div>
      <div class="line">    </div>
      <div class="line">    <span class="comment">// Return const reference for read-only access</span></div>
      <div class="line">    <span class="keyword">const</span> <span class="type">int</span>& <span class="function">operator[]</span>(<span class="type">int</span> index) <span class="keyword">const</span> {</div>
      <div class="line">        <span class="keyword">return</span> data[index];</div>
      <div class="line">    }</div>
      <div class="line">};</div>
      <div class="line"> </div>
      <div class="line">Array arr;</div>
      <div class="line">arr[<span class="number">0</span>] = <span class="number">42</span>;  <span class="comment">// Works because operator[] returns reference</span></div>
    </div>
    
    <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Range-based for loops with references</h3>
    <div class="code-block">
      <div class="line">std::vector&lt;<span class="type">int</span>&gt; numbers = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};</div>
      <div class="line"> </div>
      <div class="line"><span class="comment">// Without reference (copies each element)</span></div>
      <div class="line"><span class="keyword">for</span> (<span class="type">int</span> x : numbers) {</div>
      <div class="line">    x = x * <span class="number">2</span>;  <span class="comment">// Modifies copy only</span></div>
      <div class="line">}</div>
      <div class="line"><span class="comment">// numbers unchanged: 1,2,3,4,5</span></div>
      <div class="line"> </div>
      <div class="line"><span class="comment">// With reference (modifies original)</span></div>
      <div class="line"><span class="keyword">for</span> (<span class="type">int</span>& x : numbers) {</div>
      <div class="line">    x = x * <span class="number">2</span>;  <span class="comment">// Modifies original vector</span></div>
      <div class="line">}</div>
      <div class="line"><span class="comment">// numbers now: 2,4,6,8,10</span></div>
      <div class="line"> </div>
      <div class="line"><span class="comment">// Const reference for read-only (efficient)</span></div>
      <div class="line"><span class="keyword">for</span> (<span class="keyword">const</span> <span class="type">int</span>& x : numbers) {</div>
      <div class="line">    <span class="function">cout</span> &lt;&lt; x &lt;&lt; <span class="string">" "</span>;  <span class="comment">// Read only, no copy</span></div>
      <div class="line">}</div>
    </div>
    
    <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Reference vs Pointer Summary</h3>
    <table class="w-full text-white border-collapse mt-2">
      <tr class="bg-blue-900">
        <th class="p-2 border">Feature</th>
        <th class="p-2 border">Reference</th>
        <th class="p-2 border">Pointer</th>
      </tr>
      <tr>
        <td class="p-2 border">Must be initialized</td>
        <td class="p-2 border">✅ Yes</td>
        <td class="p-2 border">❌ No</td>
      </tr>
      <tr>
        <td class="p-2 border">Can be null</td>
        <td class="p-2 border">❌ No</td>
        <td class="p-2 border">✅ Yes</td>
      </tr>
      <tr>
        <td class="p-2 border">Can be reassigned</td>
        <td class="p-2 border">❌ No</td>
        <td class="p-2 border">✅ Yes</td>
      </tr>
      <tr>
        <td class="p-2 border">Syntax</td>
        <td class="p-2 border">Auto-dereferenced</td>
        <td class="p-2 border">Need * operator</td>
      </tr>
      <tr>
        <td class="p-2 border">Memory address</td>
        <td class="p-2 border">Same as original</td>
        <td class="p-2 border">Stores address</td>
      </tr>
    </table>
    
    <div class="note mt-4 p-3 bg-green-900 text-white">
      💡 <strong>Best Practice:</strong> Use references when you can, pointers when you must. 
      References are safer and have cleaner syntax. Use pointers for dynamic memory, 
      nullable parameters, and array traversal.
    </div>
  `,
  },
  // ==================== Dynamic Memory ====================
  dynamic: {
    title: "💾 DYNAMIC MEMORY",
    body: `
      <p>Dynamic memory allocation allows you to allocate memory at runtime using <code>new</code> and <code>delete</code> operators.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Dynamic Allocation</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Single variable allocation</span></div>
        <div class="line"><span class="type">int</span>* p = <span class="keyword">new</span> <span class="type">int</span>;      <span class="comment">// Allocates memory for one int</span></div>
        <div class="line">*p = <span class="number">42</span>;                    <span class="comment">// Assign value</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; *p &lt;&lt; <span class="function">endl</span>;        <span class="comment">// 42</span></div>
        <div class="line"><span class="keyword">delete</span> p;                   <span class="comment">// Free memory (important!)</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Initialize while allocating</span></div>
        <div class="line"><span class="type">int</span>* q = <span class="keyword">new</span> <span class="type">int</span>(<span class="number">100</span>);    <span class="comment">// Allocate and initialize to 100</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; *q &lt;&lt; <span class="function">endl</span>;        <span class="comment">// 100</span></div>
        <div class="line"><span class="keyword">delete</span> q;</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Dynamic Arrays</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Array allocation</span></div>
        <div class="line"><span class="type">int</span>* arr = <span class="keyword">new</span> <span class="type">int</span>[<span class="number">10</span>];   <span class="comment">// Allocate array of 10 ints</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Use like regular array</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; <span class="number">10</span>; i++) {</div>
        <div class="line">    arr[i] = i * <span class="number">10</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Print array</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; <span class="number">10</span>; i++) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; arr[i] &lt;&lt; <span class="string">" "</span>;  <span class="comment">// 0 10 20 30 40 50 60 70 80 90</span></div>
        <div class="line">}</div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Free array memory (note the [])</span></div>
        <div class="line"><span class="keyword">delete</span>[] arr;</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 2D Dynamic Arrays</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> rows = <span class="number">3</span>, cols = <span class="number">4</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Allocate array of pointers</span></div>
        <div class="line"><span class="type">int</span>** matrix = <span class="keyword">new</span> <span class="type">int</span>*[rows];</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Allocate each row</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; rows; i++) {</div>
        <div class="line">    matrix[i] = <span class="keyword">new</span> <span class="type">int</span>[cols];</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Use 2D array</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; rows; i++) {</div>
        <div class="line">    <span class="keyword">for</span> (<span class="type">int</span> j = <span class="number">0</span>; j &lt; cols; j++) {</div>
        <div class="line">        matrix[i][j] = i * cols + j;</div>
        <div class="line">    }</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Free memory (reverse order)</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; rows; i++) {</div>
        <div class="line">    <span class="keyword">delete</span>[] matrix[i];  <span class="comment">// Delete each row</span></div>
        <div class="line">}</div>
        <div class="line"><span class="keyword">delete</span>[] matrix;  <span class="comment">// Delete array of pointers</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Dynamic Objects</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">Student</span> {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">string</span> name;</div>
        <div class="line">    <span class="type">int</span> age;</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Student</span>(<span class="type">string</span> n, <span class="type">int</span> a) : name(n), age(a) {}</div>
        <div class="line">    <span class="type">void</span> <span class="function">display</span>() {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; name &lt;&lt; <span class="string">" is "</span> &lt;&lt; age &lt;&lt; <span class="string">" years old"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Allocate object</span></div>
        <div class="line">Student* s = <span class="keyword">new</span> Student(<span class="string">"Alice"</span>, <span class="number">20</span>);</div>
        <div class="line">s-&gt;<span class="function">display</span>();  <span class="comment">// Arrow operator for pointer</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Free object</span></div>
        <div class="line"><span class="keyword">delete</span> s;</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Common Pitfalls</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Memory leak - forgetting to delete</span></div>
        <div class="line"><span class="type">int</span>* ptr = <span class="keyword">new</span> <span class="type">int</span>(<span class="number">42</span>);</div>
        <div class="line"><span class="comment">// forgot delete - memory leak!</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Dangling pointer - using after delete</span></div>
        <div class="line"><span class="type">int</span>* p = <span class="keyword">new</span> <span class="type">int</span>(<span class="number">100</span>);</div>
        <div class="line"><span class="keyword">delete</span> p;</div>
        <div class="line">*p = <span class="number">200</span>;  <span class="comment">// Undefined behavior! p is dangling</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Double delete</span></div>
        <div class="line"><span class="type">int</span>* q = <span class="keyword">new</span> <span class="type">int</span>(<span class="number">50</span>);</div>
        <div class="line"><span class="keyword">delete</span> q;</div>
        <div class="line"><span class="keyword">delete</span> q;  <span class="comment">// Undefined behavior!</span></div>
      </div>
      
      <div class="note mt-4 p-3 bg-red-900 text-white">
        ⚠️ <strong>Golden Rules:</strong>
        <ul class="mt-2">
          <li>Always match new with delete, new[] with delete[]</li>
          <li>Set pointers to nullptr after deletion</li>
          <li>Prefer smart pointers over raw pointers in modern C++</li>
          <li>Check for allocation failure (though new throws exception)</li>
        </ul>
      </div>
    `,
  },

  // ==================== LEVEL 3: OOP ====================

  classes: {
    title: "🏷️ CLASSES & OBJECTS",
    body: `
      <p>Classes are the foundation of object-oriented programming in C++. They encapsulate data and functions that operate on that data.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Class Definition</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">Car</span> {</div>
        <div class="line"><span class="keyword">private</span>:    <span class="comment">// Accessible only within the class</span></div>
        <div class="line">    <span class="type">string</span> brand;</div>
        <div class="line">    <span class="type">string</span> model;</div>
        <div class="line">    <span class="type">int</span> year;</div>
        <div class="line">    <span class="type">double</span> speed;</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:     <span class="comment">// Accessible from outside</span></div>
        <div class="line">    <span class="comment">// Constructor</span></div>
        <div class="line">    <span class="function">Car</span>(<span class="type">string</span> b, <span class="type">string</span> m, <span class="type">int</span> y) {</div>
        <div class="line">        brand = b;</div>
        <div class="line">        model = m;</div>
        <div class="line">        year = y;</div>
        <div class="line">        speed = <span class="number">0.0</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Member functions (methods)</span></div>
        <div class="line">    <span class="type">void</span> <span class="function">accelerate</span>(<span class="type">double</span> amount) {</div>
        <div class="line">        speed += amount;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">brake</span>(<span class="type">double</span> amount) {</div>
        <div class="line">        speed -= amount;</div>
        <div class="line">        <span class="keyword">if</span> (speed &lt; <span class="number">0</span>) speed = <span class="number">0</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">double</span> <span class="function">getSpeed</span>() {</div>
        <div class="line">        <span class="keyword">return</span> speed;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">displayInfo</span>() {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; brand &lt;&lt; <span class="string">" "</span> &lt;&lt; model &lt;&lt; <span class="string">" ("</span> &lt;&lt; year &lt;&lt; <span class="string">")"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Creating and Using Objects</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// Create object (stack allocation)</span></div>
        <div class="line">    Car myCar(<span class="string">"Toyota"</span>, <span class="string">"Camry"</span>, <span class="number">2020</span>);</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Use object methods</span></div>
        <div class="line">    myCar.<span class="function">displayInfo</span>();</div>
        <div class="line">    myCar.<span class="function">accelerate</span>(<span class="number">50</span>);</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Speed: "</span> &lt;&lt; myCar.<span class="function">getSpeed</span>() &lt;&lt; <span class="string">" km/h"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Dynamic allocation (heap)</span></div>
        <div class="line">    Car* carPtr = <span class="keyword">new</span> Car(<span class="string">"BMW"</span>, <span class="string">"X5"</span>, <span class="number">2022</span>);</div>
        <div class="line">    carPtr-&gt;<span class="function">accelerate</span>(<span class="number">80</span>);  <span class="comment">// Arrow operator for pointers</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"BMW speed: "</span> &lt;&lt; carPtr-&gt;<span class="function">getSpeed</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="keyword">delete</span> carPtr;  <span class="comment">// Don't forget to delete!</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Access Specifiers</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">Example</span> {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="comment">// Only accessible within this class</span></div>
        <div class="line">    <span class="type">int</span> secretNumber;</div>
        <div class="line">    <span class="type">void</span> <span class="function">privateHelper</span>() { }</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">protected</span>:</div>
        <div class="line">    <span class="comment">// Accessible in this class and derived classes</span></div>
        <div class="line">    <span class="type">int</span> protectedData;</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="comment">// Accessible from anywhere</span></div>
        <div class="line">    <span class="function">Example</span>() {</div>
        <div class="line">        secretNumber = <span class="number">42</span>;</div>
        <div class="line">        protectedData = <span class="number">100</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">int</span> <span class="function">getSecret</span>() {</div>
        <div class="line">        <span class="keyword">return</span> secretNumber;  <span class="comment">// Public getter for private data</span></div>
        <div class="line">    }</div>
        <div class="line">};</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Member Initialization List</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">Point</span> {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">double</span> x, y;</div>
        <div class="line">    <span class="type">const</span> <span class="type">int</span> id;  <span class="comment">// const member must be initialized in list</span></div>
        <div class="line">    <span class="type">int</span>& ref;        <span class="comment">// reference must be initialized in list</span></div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="comment">// Member initializer list (more efficient)</span></div>
        <div class="line">    <span class="function">Point</span>(<span class="type">double</span> x_val, <span class="type">double</span> y_val, <span class="type">int</span> id_val, <span class="type">int</span>& ref_val)</div>
        <div class="line">        : x(x_val), y(y_val), id(id_val), ref(ref_val) {</div>
        <div class="line">        <span class="comment">// Constructor body (can be empty)</span></div>
        <div class="line">    }</div>
        <div class="line">};</div>
      </div>
    `,
  },

  inheritance: {
    title: "🌳 INHERITANCE",
    body: `
      <p>Inheritance allows a class to inherit properties and methods from another class, promoting code reuse and establishing hierarchical relationships.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Inheritance</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Base class (parent)</span></div>
        <div class="line"><span class="keyword">class</span> <span class="type">Animal</span> {</div>
        <div class="line"><span class="keyword">protected</span>:  <span class="comment">// Accessible in derived classes</span></div>
        <div class="line">    <span class="type">string</span> name;</div>
        <div class="line">    <span class="type">int</span> age;</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Animal</span>(<span class="type">string</span> n, <span class="type">int</span> a) : name(n), age(a) {}</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">eat</span>() {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; name &lt;&lt; <span class="string">" is eating"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">sleep</span>() {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; name &lt;&lt; <span class="string">" is sleeping"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Derived class (child)</span></div>
        <div class="line"><span class="keyword">class</span> <span class="type">Dog</span> : <span class="keyword">public</span> Animal {  <span class="comment">// Public inheritance</span></div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">string</span> breed;</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="comment">// Call base class constructor in initializer list</span></div>
        <div class="line">    <span class="function">Dog</span>(<span class="type">string</span> n, <span class="type">int</span> a, <span class="type">string</span> b) : Animal(n, a), breed(b) {}</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">bark</span>() {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; name &lt;&lt; <span class="string">" says Woof!"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">displayBreed</span>() {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; name &lt;&lt; <span class="string">" is a "</span> &lt;&lt; breed &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Using Inherited Classes</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    Dog myDog(<span class="string">"Rex"</span>, <span class="number">3</span>, <span class="string">"German Shepherd"</span>);</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Call inherited methods</span></div>
        <div class="line">    myDog.<span class="function">eat</span>();     <span class="comment">// From Animal</span></div>
        <div class="line">    myDog.<span class="function">sleep</span>();   <span class="comment">// From Animal</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Call own methods</span></div>
        <div class="line">    myDog.<span class="function">bark</span>();           <span class="comment">// From Dog</span></div>
        <div class="line">    myDog.<span class="function">displayBreed</span>();   <span class="comment">// From Dog</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Types of Inheritance</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// 1. Single Inheritance (one base class)</span></div>
        <div class="line"><span class="keyword">class</span> A { };</div>
        <div class="line"><span class="keyword">class</span> B : <span class="keyword">public</span> A { };</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// 2. Multiple Inheritance (multiple base classes)</span></div>
        <div class="line"><span class="keyword">class</span> Camera { <span class="keyword">public</span>: <span class="type">void</span> takePhoto() { } };</div>
        <div class="line"><span class="keyword">class</span> Phone { <span class="keyword">public</span>: <span class="type">void</span> makeCall() { } };</div>
        <div class="line"><span class="keyword">class</span> Smartphone : <span class="keyword">public</span> Camera, <span class="keyword">public</span> Phone { };</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// 3. Multilevel Inheritance</span></div>
        <div class="line"><span class="keyword">class</span> Animal { };</div>
        <div class="line"><span class="keyword">class</span> Mammal : <span class="keyword">public</span> Animal { };</div>
        <div class="line"><span class="keyword">class</span> Dog : <span class="keyword">public</span> Mammal { };</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// 4. Hierarchical Inheritance</span></div>
        <div class="line"><span class="keyword">class</span> Shape { };</div>
        <div class="line"><span class="keyword">class</span> Circle : <span class="keyword">public</span> Shape { };</div>
        <div class="line"><span class="keyword">class</span> Rectangle : <span class="keyword">public</span> Shape { };</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Access Control in Inheritance</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> Base {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">int</span> priv = <span class="number">1</span>;</div>
        <div class="line"><span class="keyword">protected</span>:</div>
        <div class="line">    <span class="type">int</span> prot = <span class="number">2</span>;</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="type">int</span> pub = <span class="number">3</span>;</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Public inheritance</span></div>
        <div class="line"><span class="keyword">class</span> PublicDerived : <span class="keyword">public</span> Base {</div>
        <div class="line">    <span class="comment">// prot becomes protected</span></div>
        <div class="line">    <span class="comment">// pub becomes public</span></div>
        <div class="line">    <span class="comment">// priv is inaccessible</span></div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Protected inheritance</span></div>
        <div class="line"><span class="keyword">class</span> ProtectedDerived : <span class="keyword">protected</span> Base {</div>
        <div class="line">    <span class="comment">// prot becomes protected</span></div>
        <div class="line">    <span class="comment">// pub becomes protected</span></div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Private inheritance</span></div>
        <div class="line"><span class="keyword">class</span> PrivateDerived : <span class="keyword">private</span> Base {</div>
        <div class="line">    <span class="comment">// prot becomes private</span></div>
        <div class="line">    <span class="comment">// pub becomes private</span></div>
        <div class="line">};</div>
      </div>
    `,
  },

  polymorphism: {
    title: "🔄 POLYMORPHISM",
    body: `
      <p>Polymorphism allows objects of different types to respond to the same interface. It's one of the key principles of OOP.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Virtual Functions (Runtime Polymorphism)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">Shape</span> {</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="comment">// Virtual function - can be overridden</span></div>
        <div class="line">    <span class="keyword">virtual</span> <span class="type">double</span> <span class="function">area</span>() {</div>
        <div class="line">        <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Pure virtual function (makes Shape abstract)</span></div>
        <div class="line">    <span class="keyword">virtual</span> <span class="type">void</span> <span class="function">draw</span>() = <span class="number">0</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Virtual destructor (important for polymorphism)</span></div>
        <div class="line">    <span class="keyword">virtual</span> ~<span class="function">Shape</span>() {}</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">class</span> <span class="type">Circle</span> : <span class="keyword">public</span> Shape {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">double</span> radius;</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Circle</span>(<span class="type">double</span> r) : radius(r) {}</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">double</span> <span class="function">area</span>() <span class="keyword">override</span> {  <span class="comment">// override keyword (C++11) is optional but recommended</span></div>
        <div class="line">        <span class="keyword">return</span> <span class="number">3.14159</span> * radius * radius;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">draw</span>() <span class="keyword">override</span> {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Drawing a circle"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">class</span> <span class="type">Rectangle</span> : <span class="keyword">public</span> Shape {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">double</span> width, height;</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Rectangle</span>(<span class="type">double</span> w, <span class="type">double</span> h) : width(w), height(h) {}</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">double</span> <span class="function">area</span>() <span class="keyword">override</span> {</div>
        <div class="line">        <span class="keyword">return</span> width * height;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">draw</span>() <span class="keyword">override</span> {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Drawing a rectangle"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Using Polymorphism</h3>
      <div class="code-block">
        <div class="line"><span class="type">void</span> <span class="function">printArea</span>(Shape* s) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Area: "</span> &lt;&lt; s-&gt;<span class="function">area</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    s-&gt;<span class="function">draw</span>();</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// Array of base class pointers</span></div>
        <div class="line">    Shape* shapes[<span class="number">3</span>];</div>
        <div class="line">    </div>
        <div class="line">    shapes[<span class="number">0</span>] = <span class="keyword">new</span> Circle(<span class="number">5.0</span>);</div>
        <div class="line">    shapes[<span class="number">1</span>] = <span class="keyword">new</span> Rectangle(<span class="number">4.0</span>, <span class="number">6.0</span>);</div>
        <div class="line">    shapes[<span class="number">2</span>] = <span class="keyword">new</span> Circle(<span class="number">3.0</span>);</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Polymorphic behavior</span></div>
        <div class="line">    <span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; <span class="number">3</span>; i++) {</div>
        <div class="line">        <span class="function">printArea</span>(shapes[i]);  <span class="comment">// Correct function called based on object type</span></div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Clean up</span></div>
        <div class="line">    <span class="keyword">for</span> (<span class="type">int</span> i = <span class="number">0</span>; i &lt; <span class="number">3</span>; i++) {</div>
        <div class="line">        <span class="keyword">delete</span> shapes[i];</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Virtual Destructors</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">Base</span> {</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Base</span>() { <span class="function">cout</span> &lt;&lt; <span class="string">"Base constructor"</span> &lt;&lt; <span class="function">endl</span>; }</div>
        <div class="line">    <span class="keyword">virtual</span> ~<span class="function">Base</span>() { <span class="function">cout</span> &lt;&lt; <span class="string">"Base destructor"</span> &lt;&lt; <span class="function">endl</span>; }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">class</span> <span class="type">Derived</span> : <span class="keyword">public</span> Base {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">int</span>* data;</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Derived</span>() {</div>
        <div class="line">        data = <span class="keyword">new</span> <span class="type">int</span>[<span class="number">100</span>];</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Derived constructor"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    ~<span class="function">Derived</span>() {</div>
        <div class="line">        <span class="keyword">delete</span>[] data;</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Derived destructor"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Without virtual destructor, only Base destructor would be called</span></div>
        <div class="line">Base* ptr = <span class="keyword">new</span> Derived();</div>
        <div class="line"><span class="keyword">delete</span> ptr;  <span class="comment">// Calls both destructors correctly</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Function Overriding Rules</h3>
      <ul>
        <li>✅ Function signature must match exactly (name, parameters, const-ness)</li>
        <li>✅ Return type must be the same (or covariant)</li>
        <li>✅ Base class function must be virtual</li>
        <li>✅ Override keyword (C++11) helps catch errors</li>
        <li>❌ Static functions cannot be virtual</li>
        <li>❌ Constructors cannot be virtual</li>
      </ul>
    `,
  },

  // ==================== LEVEL 4: MODERN C++ ====================

  templates: {
    title: "⚙️ TEMPLATES",
    body: `
      <p>Templates enable generic programming - writing code that works with any type. They are a powerful feature of C++.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Function Templates</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Template function that works with any type</span></div>
        <div class="line"><span class="keyword">template</span> &lt;<span class="keyword">typename</span> T&gt;</div>
        <div class="line">T <span class="function">max</span>(T a, T b) {</div>
        <div class="line">    <span class="keyword">return</span> (a &gt; b) ? a : b;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Using the template</span></div>
        <div class="line"><span class="type">int</span> i = <span class="function">max</span>(<span class="number">5</span>, <span class="number">3</span>);           <span class="comment">// T deduced as int</span></div>
        <div class="line"><span class="type">double</span> d = <span class="function">max</span>(<span class="number">5.7</span>, <span class="number">2.3</span>);    <span class="comment">// T deduced as double</span></div>
        <div class="line"><span class="type">string</span> s = <span class="function">max</span>&lt;<span class="type">string</span>&gt;(<span class="string">"apple"</span>, <span class="string">"banana"</span>);  <span class="comment">// Explicit type</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Template with multiple parameters</span></div>
        <div class="line"><span class="keyword">template</span> &lt;<span class="keyword">typename</span> T, <span class="keyword">typename</span> U&gt;</div>
        <div class="line"><span class="keyword">auto</span> <span class="function">add</span>(T a, U b) -&gt; <span class="keyword">decltype</span>(a + b) {  <span class="comment">// C++11 trailing return type</span></div>
        <div class="line">    <span class="keyword">return</span> a + b;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">auto</span> result = <span class="function">add</span>(<span class="number">5</span>, <span class="number">3.14</span>);  <span class="comment">// double</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Class Templates</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">template</span> &lt;<span class="keyword">typename</span> T&gt;</div>
        <div class="line"><span class="keyword">class</span> <span class="type">Box</span> {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    T content;</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Box</span>(T c) : content(c) {}</div>
        <div class="line">    </div>
        <div class="line">    T <span class="function">getContent</span>() {</div>
        <div class="line">        <span class="keyword">return</span> content;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">void</span> <span class="function">setContent</span>(T c) {</div>
        <div class="line">        content = c;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Using class template</span></div>
        <div class="line">Box&lt;<span class="type">int</span>&gt; intBox(<span class="number">42</span>);</div>
        <div class="line">Box&lt;<span class="type">string</span>&gt; strBox(<span class="string">"Hello"</span>);</div>
        <div class="line">Box&lt;<span class="type">double</span>&gt; doubleBox(<span class="number">3.14</span>);</div>
        <div class="line"> </div>
        <div class="line"><span class="function">cout</span> &lt;&lt; intBox.<span class="function">getContent</span>() &lt;&lt; <span class="function">endl</span>;   <span class="comment">// 42</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; strBox.<span class="function">getContent</span>() &lt;&lt; <span class="function">endl</span>;   <span class="comment">// Hello</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Template Specialization</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Generic template</span></div>
        <div class="line"><span class="keyword">template</span> &lt;<span class="keyword">typename</span> T&gt;</div>
        <div class="line"><span class="keyword">class</span> <span class="type">Printer</span> {</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="type">void</span> <span class="function">print</span>(T value) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Value: "</span> &lt;&lt; value &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Specialization for bool</span></div>
        <div class="line"><span class="keyword">template</span> &lt;&gt;</div>
        <div class="line"><span class="keyword">class</span> <span class="type">Printer</span>&lt;<span class="type">bool</span>&gt; {</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="type">void</span> <span class="function">print</span>(<span class="type">bool</span> value) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Boolean: "</span> &lt;&lt; (value ? <span class="string">"true"</span> : <span class="string">"false"</span>) &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Template with Non-type Parameters</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">template</span> &lt;<span class="keyword">typename</span> T, <span class="type">int</span> size&gt;</div>
        <div class="line"><span class="keyword">class</span> <span class="type">Array</span> {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    T arr[size];</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="type">int</span> <span class="function">getSize</span>() {</div>
        <div class="line">        <span class="keyword">return</span> size;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    T& <span class="keyword">operator</span>[](<span class="type">int</span> index) {</div>
        <div class="line">        <span class="keyword">return</span> arr[index];</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line">Array&lt;<span class="type">int</span>, <span class="number">10</span>&gt; intArray;  <span class="comment">// Array of 10 ints</span></div>
        <div class="line">Array&lt;<span class="type">double</span>, <span class="number">5</span>&gt; doubleArray;  <span class="comment">// Array of 5 doubles</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Variadic Templates (C++11)</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Template that accepts any number of arguments</span></div>
        <div class="line"><span class="keyword">template</span> &lt;<span class="keyword">typename</span> T&gt;</div>
        <div class="line"><span class="type">void</span> <span class="function">print</span>(T value) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; value &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">template</span> &lt;<span class="keyword">typename</span> T, <span class="keyword">typename</span>... Args&gt;</div>
        <div class="line"><span class="type">void</span> <span class="function">print</span>(T first, Args... args) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; first &lt;&lt; <span class="string">", "</span>;</div>
        <div class="line">    <span class="function">print</span>(args...);  <span class="comment">// Recursive call</span></div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="function">print</span>(<span class="number">1</span>, <span class="number">2.5</span>, <span class="string">"hello"</span>, <span class="string">'A'</span>);  <span class="comment">// Prints: 1, 2.5, hello, A</span></div>
      </div>
    `,
  },

  stl: {
    title: "📦 STL CONTAINERS",
    body: `
      <p>The Standard Template Library (STL) provides a collection of generic containers, algorithms, and iterators.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Vector (Dynamic Array)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;vector&gt;</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// Create vectors</span></div>
        <div class="line">    vector&lt;<span class="type">int</span>&gt; v1;                    <span class="comment">// Empty vector</span></div>
        <div class="line">    vector&lt;<span class="type">int</span>&gt; v2(<span class="number">5</span>);                  <span class="comment">// 5 elements, default 0</span></div>
        <div class="line">    vector&lt;<span class="type">int</span>&gt; v3(<span class="number">5</span>, <span class="number">10</span>);              <span class="comment">// 5 elements, all 10</span></div>
        <div class="line">    vector&lt;<span class="type">int</span>&gt; v4 = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};   <span class="comment">// Initializer list</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Adding elements</span></div>
        <div class="line">    v1.<span class="function">push_back</span>(<span class="number">10</span>);</div>
        <div class="line">    v1.<span class="function">push_back</span>(<span class="number">20</span>);</div>
        <div class="line">    v1.<span class="function">push_back</span>(<span class="number">30</span>);</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Accessing elements</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; v1[<span class="number">0</span>] &lt;&lt; <span class="function">endl</span>;              <span class="comment">// 10 (no bounds check)</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; v1.<span class="function">at</span>(<span class="number">1</span>) &lt;&lt; <span class="function">endl</span>;           <span class="comment">// 20 (with bounds check)</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; v1.<span class="function">front</span>() &lt;&lt; <span class="function">endl</span>;         <span class="comment">// first element</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; v1.<span class="function">back</span>() &lt;&lt; <span class="function">endl</span>;          <span class="comment">// last element</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Size and capacity</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Size: "</span> &lt;&lt; v1.<span class="function">size</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Capacity: "</span> &lt;&lt; v1.<span class="function">capacity</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Iterating</span></div>
        <div class="line">    <span class="keyword">for</span> (<span class="type">int</span> x : v1) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; x &lt;&lt; <span class="string">" "</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 List (Doubly Linked List)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;list&gt;</span></div>
        <div class="line"> </div>
        <div class="line">list&lt;<span class="type">string</span>&gt; names;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Adding elements</span></div>
        <div class="line">names.<span class="function">push_back</span>(<span class="string">"Alice"</span>);</div>
        <div class="line">names.<span class="function">push_front</span>(<span class="string">"Bob"</span>);</div>
        <div class="line">names.<span class="function">push_back</span>(<span class="string">"Charlie"</span>);</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Insert at position</span></div>
        <div class="line"><span class="keyword">auto</span> it = names.<span class="function">begin</span>();</div>
        <div class="line"><span class="function">advance</span>(it, <span class="number">2</span>);  <span class="comment">// Move iterator</span></div>
        <div class="line">names.<span class="function">insert</span>(it, <span class="string">"David"</span>);</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Remove elements</span></div>
        <div class="line">names.<span class="function">pop_front</span>();</div>
        <div class="line">names.<span class="function">remove</span>(<span class="string">"Alice"</span>);</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// List-specific operations</span></div>
        <div class="line">list&lt;<span class="type">int</span>&gt; numbers = {<span class="number">5</span>, <span class="number">2</span>, <span class="number">8</span>, <span class="number">1</span>, <span class="number">3</span>};</div>
        <div class="line">numbers.<span class="function">sort</span>();           <span class="comment">// Sort</span></div>
        <div class="line">numbers.<span class="function">unique</span>();         <span class="comment">// Remove duplicates</span></div>
        <div class="line">numbers.<span class="function">reverse</span>();        <span class="comment">// Reverse order</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Map (Key-Value Pairs)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;map&gt;</span></div>
        <div class="line"> </div>
        <div class="line">map&lt;<span class="type">string</span>, <span class="type">int</span>&gt; ages;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Adding elements</span></div>
        <div class="line">ages[<span class="string">"Alice"</span>] = <span class="number">25</span>;</div>
        <div class="line">ages[<span class="string">"Bob"</span>] = <span class="number">30</span>;</div>
        <div class="line">ages.<span class="function">insert</span>({<span class="string">"Charlie"</span>, <span class="number">35</span>});</div>
        <div class="line">ages.<span class="function">emplace</span>(<span class="string">"David"</span>, <span class="number">28</span>);  <span class="comment">// C++11</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Accessing</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Alice's age: "</span> &lt;&lt; ages[<span class="string">"Alice"</span>] &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Check if key exists</span></div>
        <div class="line"><span class="keyword">if</span> (ages.<span class="function">find</span>(<span class="string">"Eve"</span>) != ages.<span class="function">end</span>()) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Found Eve"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Iterating</span></div>
        <div class="line"><span class="keyword">for</span> (<span class="keyword">const</span> <span class="keyword">auto</span>& [name, age] : ages) {  <span class="comment">// C++17 structured binding</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; name &lt;&lt; <span class="string">": "</span> &lt;&lt; age &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Set (Unique Elements)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;set&gt;</span></div>
        <div class="line"> </div>
        <div class="line">set&lt;<span class="type">int</span>&gt; numbers = {<span class="number">5</span>, <span class="number">2</span>, <span class="number">8</span>, <span class="number">2</span>, <span class="number">1</span>, <span class="number">5</span>};  <span class="comment">// Stores: 1,2,5,8</span></div>
        <div class="line"> </div>
        <div class="line">numbers.<span class="function">insert</span>(<span class="number">3</span>);</div>
        <div class="line">numbers.<span class="function">erase</span>(<span class="number">2</span>);</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">if</span> (numbers.<span class="function">count</span>(<span class="number">5</span>)) {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"5 is in the set"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Container Adaptors</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;stack&gt;</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;queue&gt;</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Stack (LIFO)</span></div>
        <div class="line">stack&lt;<span class="type">int</span>&gt; s;</div>
        <div class="line">s.<span class="function">push</span>(<span class="number">10</span>);</div>
        <div class="line">s.<span class="function">push</span>(<span class="number">20</span>);</div>
        <div class="line"><span class="function">cout</span> &lt;&lt; s.<span class="function">top</span>() &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 20</span></div>
        <div class="line">s.<span class="function">pop</span>();</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Queue (FIFO)</span></div>
        <div class="line">queue&lt;<span class="type">string</span>&gt; q;</div>
        <div class="line">q.<span class="function">push</span>(<span class="string">"first"</span>);</div>
        <div class="line">q.<span class="function">push</span>(<span class="string">"second"</span>);</div>
        <div class="line"><span class="function">cout</span> &lt;&lt; q.<span class="function">front</span>() &lt;&lt; <span class="function">endl</span>;  <span class="comment">// first</span></div>
      </div>
    `,
  },

  exceptions: {
    title: "⚠️ EXCEPTION HANDLING",
    body: `
      <p>Exception handling provides a way to respond to exceptional circumstances (like runtime errors) by transferring control to special handlers.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Exception Handling</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;stdexcept&gt;</span></div>
        <div class="line"><span class="keyword">using namespace</span> std;</div>
        <div class="line"> </div>
        <div class="line"><span class="type">double</span> <span class="function">divide</span>(<span class="type">double</span> a, <span class="type">double</span> b) {</div>
        <div class="line">    <span class="keyword">if</span> (b == <span class="number">0</span>) {</div>
        <div class="line">        <span class="keyword">throw</span> <span class="string">"Division by zero!"</span>;  <span class="comment">// Throw a C-string</span></div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">return</span> a / b;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="keyword">try</span> {</div>
        <div class="line">        <span class="type">double</span> result = <span class="function">divide</span>(<span class="number">10</span>, <span class="number">0</span>);</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Result: "</span> &lt;&lt; result &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">catch</span> (<span class="keyword">const</span> <span class="type">char</span>* msg) {</div>
        <div class="line">        <span class="function">cerr</span> &lt;&lt; <span class="string">"Error: "</span> &lt;&lt; msg &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Standard Exceptions</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;stdexcept&gt;</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">double</span> <span class="function">safeDivide</span>(<span class="type">double</span> a, <span class="type">double</span> b) {</div>
        <div class="line">    <span class="keyword">if</span> (b == <span class="number">0</span>) {</div>
        <div class="line">        <span class="keyword">throw</span> <span class="function">runtime_error</span>(<span class="string">"Division by zero!"</span>);</div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">return</span> a / b;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="keyword">try</span> {</div>
        <div class="line">        <span class="type">int</span>* arr = <span class="keyword">new</span> <span class="type">int</span>[<span class="number">1000000000000</span>];  <span class="comment">// May throw bad_alloc</span></div>
        <div class="line">        <span class="type">double</span> result = <span class="function">safeDivide</span>(<span class="number">10</span>, <span class="number">0</span>);</div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">catch</span> (<span class="keyword">const</span> runtime_error& e) {</div>
        <div class="line">        <span class="function">cerr</span> &lt;&lt; <span class="string">"Runtime error: "</span> &lt;&lt; e.<span class="function">what</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">catch</span> (<span class="keyword">const</span> bad_alloc& e) {</div>
        <div class="line">        <span class="function">cerr</span> &lt;&lt; <span class="string">"Memory allocation failed: "</span> &lt;&lt; e.<span class="function">what</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">catch</span> (<span class="keyword">const</span> exception& e) {  <span class="comment">// Catch any standard exception</span></div>
        <div class="line">        <span class="function">cerr</span> &lt;&lt; <span class="string">"Exception: "</span> &lt;&lt; e.<span class="function">what</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">catch</span> (...) {  <span class="comment">// Catch any exception (any type)</span></div>
        <div class="line">        <span class="function">cerr</span> &lt;&lt; <span class="string">"Unknown error occurred"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Custom Exception Classes</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">MyException</span> : <span class="keyword">public</span> exception {</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">string</span> message;</div>
        <div class="line">    <span class="type">int</span> errorCode;</div>
        <div class="line">    </div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">MyException</span>(<span class="type">string</span> msg, <span class="type">int</span> code) : message(msg), errorCode(code) {}</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">const</span> <span class="type">char</span>* <span class="function">what</span>() <span class="keyword">const</span> noexcept <span class="keyword">override</span> {</div>
        <div class="line">        <span class="keyword">return</span> message.<span class="function">c_str</span>();</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="type">int</span> <span class="function">getCode</span>() <span class="keyword">const</span> {</div>
        <div class="line">        <span class="keyword">return</span> errorCode;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="type">void</span> <span class="function">testFunction</span>(<span class="type">int</span> value) {</div>
        <div class="line">    <span class="keyword">if</span> (value &lt; <span class="number">0</span>) {</div>
        <div class="line">        <span class="keyword">throw</span> <span class="function">MyException</span>(<span class="string">"Negative value not allowed"</span>, <span class="number">1001</span>);</div>
        <div class="line">    }</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="keyword">try</span> {</div>
        <div class="line">        <span class="function">testFunction</span>(-<span class="number">5</span>);</div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">catch</span> (<span class="keyword">const</span> MyException& e) {</div>
        <div class="line">        <span class="function">cerr</span> &lt;&lt; <span class="string">"Error: "</span> &lt;&lt; e.<span class="function">what</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">        <span class="function">cerr</span> &lt;&lt; <span class="string">"Code: "</span> &lt;&lt; e.<span class="function">getCode</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Stack Unwinding</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">class</span> <span class="type">Test</span> {</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Test</span>(<span class="type">int</span> id) : id(id) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Constructing "</span> &lt;&lt; id &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    ~<span class="function">Test</span>() {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Destructing "</span> &lt;&lt; id &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line"><span class="keyword">private</span>:</div>
        <div class="line">    <span class="type">int</span> id;</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="type">void</span> <span class="function">func2</span>() {</div>
        <div class="line">    Test t3(<span class="number">3</span>);</div>
        <div class="line">    <span class="keyword">throw</span> <span class="function">runtime_error</span>(<span class="string">"Error in func2"</span>);</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">void</span> <span class="function">func1</span>() {</div>
        <div class="line">    Test t2(<span class="number">2</span>);</div>
        <div class="line">    <span class="function">func2</span>();</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="keyword">try</span> {</div>
        <div class="line">        Test t1(<span class="number">1</span>);</div>
        <div class="line">        <span class="function">func1</span>();</div>
        <div class="line">    }</div>
        <div class="line">    <span class="keyword">catch</span> (<span class="keyword">const</span> exception& e) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Caught: "</span> &lt;&lt; e.<span class="function">what</span>() &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    <span class="comment">// Destructors called in reverse order: 3, 2, 1</span></div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Exception Safety Guarantees</h3>
      <ul>
        <li><strong>Basic guarantee:</strong> No resources leak, objects in valid state</li>
        <li><strong>Strong guarantee:</strong> Operation either succeeds or has no effect (commit or rollback)</li>
        <li><strong>No-throw guarantee:</strong> Operation never throws (noexcept)</li>
      </ul>
    `,
  },

  lambda: {
    title: "λ LAMBDA EXPRESSIONS",
    body: `
      <p>Lambda expressions create anonymous functions inline. They were introduced in C++11 and enhanced in later standards.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Basic Lambda Syntax</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// [capture](parameters) -> return_type { body }</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Simplest lambda</span></div>
        <div class="line"><span class="keyword">auto</span> hello = []() {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Hello, Lambda!"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">};</div>
        <div class="line"><span class="function">hello</span>();  <span class="comment">// Call the lambda</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Lambda with parameters</span></div>
        <div class="line"><span class="keyword">auto</span> add = [](<span class="type">int</span> a, <span class="type">int</span> b) {</div>
        <div class="line">    <span class="keyword">return</span> a + b;</div>
        <div class="line">};</div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="function">add</span>(<span class="number">5</span>, <span class="number">3</span>) &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 8</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Lambda with explicit return type</span></div>
        <div class="line"><span class="keyword">auto</span> divide = [](<span class="type">double</span> a, <span class="type">double</span> b) -&gt; <span class="type">double</span> {</div>
        <div class="line">    <span class="keyword">if</span> (b != <span class="number">0</span>) <span class="keyword">return</span> a / b;</div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">};</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Capture Clause</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> x = <span class="number">10</span>, y = <span class="number">20</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Capture by value (copy)</span></div>
        <div class="line"><span class="keyword">auto</span> byValue = [x]() {</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"x = "</span> &lt;&lt; x &lt;&lt; <span class="function">endl</span>;  <span class="comment">// x is read-only</span></div>
        <div class="line">    <span class="comment">// x = 30;  // Error: cannot modify</span></div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Capture by reference</span></div>
        <div class="line"><span class="keyword">auto</span> byRef = [&x]() {</div>
        <div class="line">    x = <span class="number">30</span>;  <span class="comment">// Can modify original</span></div>
        <div class="line">};</div>
        <div class="line"><span class="function">byRef</span>();</div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"x now: "</span> &lt;&lt; x &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 30</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Capture multiple variables</span></div>
        <div class="line"><span class="keyword">auto</span> multi = [x, &y]() {</div>
        <div class="line">    <span class="comment">// x by value, y by reference</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; x &lt;&lt; <span class="string">", "</span> &lt;&lt; y &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    y = <span class="number">100</span>;</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Capture everything</span></div>
        <div class="line"><span class="keyword">auto</span> captureAllByValue = [=]() {  <span class="comment">// Capture all by value</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; x &lt;&lt; <span class="string">", "</span> &lt;&lt; y &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">auto</span> captureAllByRef = [&]() {   <span class="comment">// Capture all by reference</span></div>
        <div class="line">    x = <span class="number">40</span>; y = <span class="number">50</span>;</div>
        <div class="line">};</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Mutable Lambdas (C++14)</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> count = <span class="number">0</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Without mutable - cannot modify captured by value</span></div>
        <div class="line"><span class="comment">// auto bad = [count]() { count++; };  // Error</span></div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// With mutable - can modify captured by value (but doesn't affect original)</span></div>
        <div class="line"><span class="keyword">auto</span> counter = [count]() <span class="keyword">mutable</span> {</div>
        <div class="line">    count++;</div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Internal count: "</span> &lt;&lt; count &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="function">counter</span>();  <span class="comment">// Internal count: 1</span></div>
        <div class="line"><span class="function">counter</span>();  <span class="comment">// Internal count: 2</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="string">"Original count: "</span> &lt;&lt; count &lt;&lt; <span class="function">endl</span>;  <span class="comment">// Original count: 0</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Generic Lambdas (C++14)</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Lambda with auto parameters (generic)</span></div>
        <div class="line"><span class="keyword">auto</span> generic = [](<span class="keyword">auto</span> a, <span class="keyword">auto</span> b) {</div>
        <div class="line">    <span class="keyword">return</span> a + b;</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="function">generic</span>(<span class="number">5</span>, <span class="number">3</span>) &lt;&lt; <span class="function">endl</span>;          <span class="comment">// 8</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="function">generic</span>(<span class="number">3.14</span>, <span class="number">2.86</span>) &lt;&lt; <span class="function">endl</span>;    <span class="comment">// 6.0</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="function">generic</span>(<span class="type">string</span>(<span class="string">"Hello"</span>), <span class="type">string</span>(<span class="string">" World"</span>)) &lt;&lt; <span class="function">endl</span>;</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Lambdas with STL Algorithms</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;vector&gt;</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;algorithm&gt;</span></div>
        <div class="line"> </div>
        <div class="line">vector&lt;<span class="type">int</span>&gt; v = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Find first even number</span></div>
        <div class="line"><span class="keyword">auto</span> it = <span class="function">find_if</span>(v.<span class="function">begin</span>(), v.<span class="function">end</span>(), [](<span class="type">int</span> n) {</div>
        <div class="line">    <span class="keyword">return</span> n % <span class="number">2</span> == <span class="number">0</span>;</div>
        <div class="line">});</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Count numbers greater than 3</span></div>
        <div class="line"><span class="type">int</span> count = <span class="function">count_if</span>(v.<span class="function">begin</span>(), v.<span class="function">end</span>(), [](<span class="type">int</span> n) {</div>
        <div class="line">    <span class="keyword">return</span> n > <span class="number">3</span>;</div>
        <div class="line">});</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Sort in descending order</span></div>
        <div class="line"><span class="function">sort</span>(v.<span class="function">begin</span>(), v.<span class="function">end</span>(), [](<span class="type">int</span> a, <span class="type">int</span> b) {</div>
        <div class="line">    <span class="keyword">return</span> a > b;</div>
        <div class="line">});</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Transform (square each element)</span></div>
        <div class="line"><span class="function">transform</span>(v.<span class="function">begin</span>(), v.<span class="function">end</span>(), v.<span class="function">begin</span>(), [](<span class="type">int</span> n) {</div>
        <div class="line">    <span class="keyword">return</span> n * n;</div>
        <div class="line">});</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Remove elements that don't satisfy condition</span></div>
        <div class="line"><span class="keyword">auto</span> newEnd = <span class="function">remove_if</span>(v.<span class="function">begin</span>(), v.<span class="function">end</span>(), [](<span class="type">int</span> n) {</div>
        <div class="line">    <span class="keyword">return</span> n > <span class="number">20</span>;</div>
        <div class="line">});</div>
        <div class="line">v.<span class="function">erase</span>(newEnd, v.<span class="function">end</span>());</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Returning Lambdas</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Function that returns a lambda</span></div>
        <div class="line"><span class="keyword">auto</span> <span class="function">createMultiplier</span>(<span class="type">int</span> factor) {</div>
        <div class="line">    <span class="keyword">return</span> [factor](<span class="type">int</span> x) {</div>
        <div class="line">        <span class="keyword">return</span> x * factor;</div>
        <div class="line">    };</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">auto</span> doubler = <span class="function">createMultiplier</span>(<span class="number">2</span>);</div>
        <div class="line"><span class="keyword">auto</span> tripler = <span class="function">createMultiplier</span>(<span class="number">3</span>);</div>
        <div class="line"> </div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="function">doubler</span>(<span class="number">5</span>) &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 10</span></div>
        <div class="line"><span class="function">cout</span> &lt;&lt; <span class="function">tripler</span>(<span class="number">5</span>) &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 15</span></div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Capture with Initializers (C++14)</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> x = <span class="number">10</span>;</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Create new variable in capture</span></div>
        <div class="line"><span class="keyword">auto</span> lambda = [y = x * <span class="number">2</span>]() {  <span class="comment">// y is captured by value, initialized to 20</span></div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"y = "</span> &lt;&lt; y &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">};</div>
        <div class="line"><span class="function">lambda</span>();  <span class="comment">// y = 20</span></div>
      </div>
    `,
  },

  smart: {
    title: "🧠 SMART POINTERS",
    body: `
      <p>Smart pointers are RAII (Resource Acquisition Is Initialization) wrappers around raw pointers that automatically manage memory. They were introduced in C++11.</p>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Why Smart Pointers?</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// Problem with raw pointers - manual memory management</span></div>
        <div class="line"><span class="type">void</span> <span class="function">leakyFunction</span>() {</div>
        <div class="line">    <span class="type">int</span>* ptr = <span class="keyword">new</span> <span class="type">int</span>(<span class="number">42</span>);</div>
        <div class="line">    <span class="comment">// If function returns early or throws exception, memory leaks!</span></div>
        <div class="line">    <span class="keyword">if</span> (someCondition) <span class="keyword">return</span>;  <span class="comment">// Oops, forgot to delete</span></div>
        <div class="line">    <span class="keyword">delete</span> ptr;</div>
        <div class="line">}</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Smart pointers solve this automatically</span></div>
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;memory&gt;</span></div>
        <div class="line"> </div>
        <div class="line"><span class="type">void</span> <span class="function">safeFunction</span>() {</div>
        <div class="line">    <span class="keyword">auto</span> ptr = <span class="function">make_unique</span>&lt;<span class="type">int</span>&gt;(<span class="number">42</span>);</div>
        <div class="line">    <span class="keyword">if</span> (someCondition) <span class="keyword">return</span>;  <span class="comment">// Memory automatically freed!</span></div>
        <div class="line">    <span class="comment">// No need to delete</span></div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 unique_ptr (Exclusive Ownership)</h3>
      <div class="code-block">
        <div class="line"><span class="keyword">#include</span> <span class="string">&lt;memory&gt;</span></div>
        <div class="line"> </div>
        <div class="line"><span class="keyword">class</span> <span class="type">Resource</span> {</div>
        <div class="line"><span class="keyword">public</span>:</div>
        <div class="line">    <span class="function">Resource</span>() { <span class="function">cout</span> &lt;&lt; <span class="string">"Resource acquired"</span> &lt;&lt; <span class="function">endl</span>; }</div>
        <div class="line">    ~<span class="function">Resource</span>() { <span class="function">cout</span> &lt;&lt; <span class="string">"Resource released"</span> &lt;&lt; <span class="function">endl</span>; }</div>
        <div class="line">    <span class="type">void</span> <span class="function">work</span>() { <span class="function">cout</span> &lt;&lt; <span class="string">"Working..."</span> &lt;&lt; <span class="function">endl</span>; }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// Creating unique_ptr</span></div>
        <div class="line">    unique_ptr&lt;Resource&gt; ptr1(<span class="keyword">new</span> Resource());  <span class="comment">// C++11 style</span></div>
        <div class="line">    <span class="keyword">auto</span> ptr2 = <span class="function">make_unique</span>&lt;Resource&gt;();          <span class="comment">// C++14 style (preferred)</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Using smart pointer (like raw pointer)</span></div>
        <div class="line">    ptr1-&gt;<span class="function">work</span>();</div>
        <div class="line">    (*ptr2).<span class="function">work</span>();</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// unique_ptr cannot be copied (only moved)</span></div>
        <div class="line">    <span class="comment">// unique_ptr&lt;Resource&gt; ptr3 = ptr1;  // Error: copy not allowed</span></div>
        <div class="line">    unique_ptr&lt;Resource&gt; ptr3 = <span class="function">move</span>(ptr1);  <span class="comment">// Transfer ownership</span></div>
        <div class="line">    <span class="comment">// ptr1 is now empty (nullptr)</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">if</span> (!ptr1) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"ptr1 is empty"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Get raw pointer (if needed)</span></div>
        <div class="line">    Resource* raw = ptr3.<span class="function">get</span>();</div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Release ownership (rarely needed)</span></div>
        <div class="line">    Resource* released = ptr3.<span class="function">release</span>();  <span class="comment">// ptr3 becomes empty</span></div>
        <div class="line">    <span class="keyword">delete</span> released;  <span class="comment">// Must delete manually now</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Automatically deleted when out of scope</span></div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 shared_ptr (Shared Ownership)</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="comment">// Creating shared_ptr</span></div>
        <div class="line">    shared_ptr&lt;Resource&gt; ptr1 = <span class="function">make_shared</span>&lt;Resource&gt;();</div>
        <div class="line">    {</div>
        <div class="line">        shared_ptr&lt;Resource&gt; ptr2 = ptr1;  <span class="comment">// Reference count increases</span></div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Use count: "</span> &lt;&lt; ptr1.<span class="function">use_count</span>() &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 2</span></div>
        <div class="line">        </div>
        <div class="line">        <span class="comment">// Both pointers point to same object</span></div>
        <div class="line">        ptr2-&gt;<span class="function">work</span>();</div>
        <div class="line">    }  <span class="comment">// ptr2 destroyed, reference count decreases to 1</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Use count: "</span> &lt;&lt; ptr1.<span class="function">use_count</span>() &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 1</span></div>
        <div class="line">    <span class="comment">// Object deleted when last shared_ptr is destroyed</span></div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 weak_ptr (Non-owning Observer)</h3>
      <div class="code-block">
        <div class="line"><span class="type">int</span> <span class="function">main</span>() {</div>
        <div class="line">    <span class="keyword">auto</span> shared = <span class="function">make_shared</span>&lt;<span class="type">int</span>&gt;(<span class="number">42</span>);</div>
        <div class="line">    weak_ptr&lt;<span class="type">int</span>&gt; weak = shared;  <span class="comment">// Doesn't increase reference count</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="function">cout</span> &lt;&lt; <span class="string">"Use count: "</span> &lt;&lt; shared.<span class="function">use_count</span>() &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 1</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="comment">// Need to lock to access</span></div>
        <div class="line">    <span class="keyword">if</span> (<span class="keyword">auto</span> locked = weak.<span class="function">lock</span>()) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Value: "</span> &lt;&lt; *locked &lt;&lt; <span class="function">endl</span>;  <span class="comment">// 42</span></div>
        <div class="line">    } <span class="keyword">else</span> {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Object no longer exists"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    shared.<span class="function">reset</span>();  <span class="comment">// Destroy the object</span></div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">if</span> (<span class="keyword">auto</span> locked = weak.<span class="function">lock</span>()) {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Still exists"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    } <span class="keyword">else</span> {</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"Object destroyed"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">    </div>
        <div class="line">    <span class="keyword">return</span> <span class="number">0</span>;</div>
        <div class="line">}</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 Custom Deleters</h3>
      <div class="code-block">
        <div class="line"><span class="comment">// For resources that need special cleanup</span></div>
        <div class="line"><span class="keyword">auto</span> fileDeleter = [](FILE* file) {</div>
        <div class="line">    <span class="keyword">if</span> (file) {</div>
        <div class="line">        <span class="function">fclose</span>(file);</div>
        <div class="line">        <span class="function">cout</span> &lt;&lt; <span class="string">"File closed"</span> &lt;&lt; <span class="function">endl</span>;</div>
        <div class="line">    }</div>
        <div class="line">};</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Using custom deleter with unique_ptr</span></div>
        <div class="line">unique_ptr&lt;FILE, decltype(fileDeleter)&gt; filePtr(<span class="function">fopen</span>(<span class="string">"test.txt"</span>, <span class="string">"w"</span>), fileDeleter);</div>
        <div class="line"> </div>
        <div class="line"><span class="comment">// Array support</span></div>
        <div class="line">unique_ptr&lt;<span class="type">int</span>[]&gt; arr = <span class="function">make_unique</span>&lt;<span class="type">int</span>[]&gt;(<span class="number">10</span>);  <span class="comment">// C++17</span></div>
        <div class="line">arr[<span class="number">0</span>] = <span class="number">42</span>;</div>
      </div>
      
      <h3 class="text-yellow-300 text-xl mt-4 mb-2">🔹 When to Use Which?</h3>
      <table class="w-full text-white border-collapse mt-2">
        <tr class="bg-blue-900">
          <th class="p-2 border">Pointer Type</th>
          <th class="p-2 border">When to Use</th>
        </tr>
        <tr>
          <td class="p-2 border"><strong>unique_ptr</strong></td>
          <td class="p-2 border">Exclusive ownership, simple resource management</td>
        </tr>
        <tr>
          <td class="p-2 border"><strong>shared_ptr</strong></td>
          <td class="p-2 border">Shared ownership, multiple owners, reference counting needed</td>
        </tr>
        <tr>
          <td class="p-2 border"><strong>weak_ptr</strong></td>
          <td class="p-2 border">Break circular references, cache, observer pattern</td>
        </tr>
        <tr>
          <td class="p-2 border"><strong>Raw pointer</strong></td>
          <td class="p-2 border">Non-owning observers, legacy code, performance-critical sections</td>
        </tr>
      </table>
      
      <div class="note mt-4 p-3 bg-green-900 text-white">
        💡 <strong>Best Practices:</strong>
        <ul class="mt-2">
          <li>Prefer make_unique and make_shared over new</li>
          <li>Use unique_ptr by default, shared_ptr only when needed</li>
          <li>Avoid circular references with shared_ptr (use weak_ptr)</li>
          <li>Don't mix smart pointers and raw pointers carelessly</li>
        </ul>
      </div>
    `,
  },
};

// جعل المتغير عاماً
if (typeof module !== "undefined" && module.exports) {
  module.exports = conceptData;
}
