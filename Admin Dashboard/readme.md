<form action="#">
                <table class="user-data">
                    <thead>
                        <tr>
                            <th><span class="text-l"><span class="theme-color">Register</span> new user's</span></th>
                            <th><button type="button" class="close-btn theme-btn btn" title="Close" onclick="closeToggle('addNewUser')"><i class="ri-close-large-line"></i></button> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label for="updateName">Full Name:</label></td>
                            <td><input type="text" class="input" id="updateName" placeholder="Update your full name"></td>
                        </tr>
                        <tr>
                            <td><label for="updateEmail">Enter Email:</label></td>
                            <td><input type="email" class="input" id="updateEmail" placeholder="Update your email address"></td>
                        </tr>
                        <tr>
                            <td><label for="updateNumber">Enter Phone No:</label></td>
                            <td><input type="number" class="input" id="updateNumber" max="10" placeholder="Update your phone no."></td>
                        </tr>
                    </tbody>
                    <tfoot class="t-foot">
                        <tr>
                            <td><button type="submit" class="btn theme-btn btn-submit" onclick="return updateRecord()">Submit</button></td>
                        </tr>
                    </tfoot>
                </table>
            </form>




            <!-- admin dashboard -->
            <div class="toggleProfile" id="toggleProfile">
                <button type="button" class="btn toggle-btn" title="View">View</button>
                <button type="button" class="btn logout-btn toggle-btn" title="Logout"><i class="ri-logout-circle-r-line"></i></button>
            </div>
            <!DOCTYPE html>
<html lang="en">
<head>
    
</head>
<body>
        <!-- <aside class="sidebar">
            <nav class="navbar">
              <ul class="wrapper">
                <li class="link logo"><a href="#">Logo</a></li>
                <li class="link"><a href="#" title="Home"><i class="ri-home-4-line"></i></a></li>
                <li class="link"><a href="#" title="All Recored"><i class="ri-checkbox-multiple-fill"></i></a></li>
              </ul>
              <ul class="wrapper">
                <li class="link"><a href="#" title="Setting"><i class="ri-settings-3-line"></i></a></li>
                <div class="display-icon-sm user"></div>
              </ul>
            </nav>
        </aside> -->
        
        <section id="calculator" class="table-wrapper calculator">
                <table class="user-data">
                    <thead>
                        <tr>
                            <th><span class="text-l"><span class="theme-color">Calculate</span></span></th>
                            <th><button type="button" class="close-btn theme-btn btn" title="Close" onclick="closeToggle('calculator')"><i class="ri-close-large-line"></i></button> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="number" class="input" id="number1" placeholder="Value"></td>
                            <td id="symbole"></td>
                            <td><input type="number" class="input" id="number2" placeholder="Value"></td>
                            <td>=</td>
                            <td><input type="number" class="input" id="answer" title="Answer-box" value="0" readonly></td>
                        </tr>
                        <tr>
                           <td>
                            <button type="button" class="btn theme-btn" title="Addition" onclick="add()"><i class="ri-add-line"></i></button>
                           <button type="button" class="btn theme-btn" title="Subtract" onclick="subtract()"><i class="ri-subtract-line"></i></button>
                           <button type="button" class="btn theme-btn" title="Multiply" onclick="multiply()"><i class="ri-add-line"></i></button>
                           <button type="button" class="btn theme-btn" title="Divide" onclick="divide()"><i class="ri-divide-line"></i></button>
                        </td>
                        <td><button type="submit" class="btn theme-btn btn-submit" onclick="calculate()">Calculate</button></td>
                        </tr>
                    </tbody>
                </table>
        </section>
        <!-- <script src="admin.js"></script> -->
        
        
</body>
</html>





<svg
                             viewBox="0 0 500 500" xml:space="preserve">
                        <g id="OBJECTS">
                            <g>
                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="250" y1="228.2279" x2="250" y2="192.1779">
                                    <stop  offset="0" style="stop-color:#E2DEDE"/>
                                    <stop  offset="1" style="stop-color:#A3A6AC"/>
                                </linearGradient>
                                <polygon style="fill:url(#SVGID_1_);" points="319.54,181.67 315.54,300.22 184.46,300.22 180.46,181.67 		"/>
                                <path style="fill:#E0E1E2;" d="M250.001,178.79l-68.53,32.803l1.499,44.42l65.133-60.851c1.068-0.998,2.727-0.998,3.795,0
                                    l65.133,60.851l1.499-44.42L250.001,178.79z"/>
                                
                                    <linearGradient id="SVGID_00000183967540002383144330000017595178556938364803_" gradientUnits="userSpaceOnUse" x1="329.5081" y1="286.5593" x2="311.8834" y2="219.3861">
                                    <stop  offset="0" style="stop-color:#E2DEDE"/>
                                    <stop  offset="1" style="stop-color:#A3A6AC"/>
                                </linearGradient>
                                <polygon style="fill:url(#SVGID_00000183967540002383144330000017595178556938364803_);" points="319.54,181.67 315.54,300.22 
                                    298.53,181.67 		"/>
                                
                                    <linearGradient id="SVGID_00000021814760207781844260000002470279514696140193_" gradientUnits="userSpaceOnUse" x1="109.1932" y1="286.5593" x2="91.5685" y2="219.3861" gradientTransform="matrix(-1 0 0 1 279.6851 0)">
                                    <stop  offset="0" style="stop-color:#E2DEDE"/>
                                    <stop  offset="1" style="stop-color:#A3A6AC"/>
                                </linearGradient>
                                <polygon style="fill:url(#SVGID_00000021814760207781844260000002470279514696140193_);" points="180.46,181.67 184.46,300.22 
                                    201.47,181.67 		"/>
                                
                                    <linearGradient id="SVGID_00000022534172977995567800000000370701637937515960_" gradientUnits="userSpaceOnUse" x1="250" y1="274.0509" x2="250" y2="239.3943">
                                    <stop  offset="0" style="stop-color:#FF8F78"/>
                                    <stop  offset="1" style="stop-color:#ff8709"/>
                                </linearGradient>
                                <path style="fill:url(#SVGID_00000022534172977995567800000000370701637937515960_);" d="M228.87,256.014h18.561v-22.081h-5.821
                                    c-7.036,0-12.74,5.704-12.74,12.74V256.014z M228.87,280.418h18.561v-18.561H228.87V280.418z M252.57,280.418h18.561v-18.561
                                    H252.57V280.418z M252.57,233.933v22.081h18.561v-9.341c0-7.036-5.704-12.74-12.74-12.74H252.57z"/>
                                <g>
                                    <g>
                                        
                                            <linearGradient id="SVGID_00000111150880247476207560000002675398117017619625_" gradientUnits="userSpaceOnUse" x1="515.2379" y1="222.1236" x2="508.5871" y2="210.7063" gradientTransform="matrix(-1 0 0 1 787.6628 0)">
                                            <stop  offset="0" style="stop-color:#ff8709"/>
                                            <stop  offset="1" style="stop-color:#00000"/>
                                        </linearGradient>
                                        <polygon style="fill:url(#SVGID_00000111150880247476207560000002675398117017619625_);" points="254.388,189.251 
                                            323.939,257.175 314.698,203.954 254.388,129.604 				"/>
                                        
                                            <linearGradient id="SVGID_00000074434859283055693210000017459326337136073148_" gradientUnits="userSpaceOnUse" x1="511.0818" y1="214.5732" x2="507.5348" y2="209.4742" gradientTransform="matrix(-1 0 0 1 787.6628 0)">
                                            <stop  offset="0" style="stop-color:#ff8709"/>
                                            <stop  offset="1" style="stop-color:#00000"/>
                                        </linearGradient>
                                        <polygon style="fill:url(#SVGID_00000074434859283055693210000017459326337136073148_);" points="254.388,189.251 
                                            330.153,254.435 320.912,201.214 254.388,129.604 				"/>
                                        
                                            <linearGradient id="SVGID_00000130620888348843767840000015328298696585979804_" gradientUnits="userSpaceOnUse" x1="508.1213" y1="216.9031" x2="504.6851" y2="211.1391" gradientTransform="matrix(-1 0 0 1 787.6628 0)">
                                            <stop  offset="0" style="stop-color:#ff8709"/>
                                            <stop  offset="1" style="stop-color:#00000"/>
                                        </linearGradient>
                                        <polygon style="fill:url(#SVGID_00000130620888348843767840000015328298696585979804_);" points="254.388,189.251 336,251.69 
                                            328.797,196.716 254.388,129.604 				"/>
                                    </g>
                                    <g>
                                        
                                            <linearGradient id="SVGID_00000128480142799749139840000012000470385153152411_" gradientUnits="userSpaceOnUse" x1="227.5751" y1="222.1236" x2="220.9243" y2="210.7063">
                                            <stop  offset="0" style="stop-color:#ff8709"/>
                                            <stop  offset="1" style="stop-color:#00000"/>
                                        </linearGradient>
                                        <polygon style="fill:url(#SVGID_00000128480142799749139840000012000470385153152411_);" points="245.612,189.251 
                                            176.061,257.175 185.302,203.954 245.612,129.604 				"/>
                                        
                                            <linearGradient id="SVGID_00000068644809650081766470000004333117533436559270_" gradientUnits="userSpaceOnUse" x1="223.4191" y1="214.5732" x2="219.8719" y2="209.4742">
                                            <stop  offset="0" style="stop-color:#ff8709"/>
                                            <stop  offset="1" style="stop-color:#00000"/>
                                        </linearGradient>
                                        <polygon style="fill:url(#SVGID_00000068644809650081766470000004333117533436559270_);" points="245.612,189.251 
                                            169.847,254.435 179.088,201.214 245.612,129.604 				"/>
                                        
                                            <linearGradient id="SVGID_00000023253824770495193870000011793210857829586619_" gradientUnits="userSpaceOnUse" x1="220.4585" y1="216.9031" x2="217.0223" y2="211.1391">
                                            <stop  offset="0" style="stop-color:#ff8709"/>
                                            <stop  offset="1" style="stop-color:#00000"/>
                                        </linearGradient>
                                        <polygon style="fill:url(#SVGID_00000023253824770495193870000011793210857829586619_);" points="245.612,189.251 164,251.69 
                                            171.203,196.716 245.612,129.604 				"/>
                                    </g>
                                    
                                        <linearGradient id="SVGID_00000102546828809148663180000006090289207006690460_" gradientUnits="userSpaceOnUse" x1="245.7773" y1="108.5178" x2="180.9318" y2="234.8835">
                                        <stop  offset="0" style="stop-color:#ff8709"/>
                                        <stop  offset="1" style="stop-color:#1B2D41"/>
                                    </linearGradient>
                                    <polygon style="fill:url(#SVGID_00000102546828809148663180000006090289207006690460_);" points="245.612,189.251 
                                        153.827,246.987 163.419,188.598 245.612,129.604 			"/>
                                    
                                        <linearGradient id="SVGID_00000183241767163143625820000007869427029457671835_" gradientUnits="userSpaceOnUse" x1="269.3289" y1="143.8295" x2="336.8347" y2="260.2189">
                                        <stop  offset="0" style="stop-color:#ff8709"/>
                                        <stop  offset="1" style="stop-color:#1B2D41"/>
                                    </linearGradient>
                                    <polygon style="fill:url(#SVGID_00000183241767163143625820000007869427029457671835_);" points="254.388,189.251 
                                        346.173,246.987 336.581,188.598 254.388,129.604 			"/>
                                    
                                        <linearGradient id="SVGID_00000149361311271657835320000001829096854301072790_" gradientUnits="userSpaceOnUse" x1="245.6123" y1="158.3902" x2="254.3877" y2="158.3902">
                                        <stop  offset="0" style="stop-color:#ff8709"/>
                                        <stop  offset="1" style="stop-color:#1B2D41"/>
                                    </linearGradient>
                                    <path style="fill:url(#SVGID_00000149361311271657835320000001829096854301072790_);" d="M254.388,189.176c0,0-1.533-2-4.388-2
                                        s-4.388,2-4.388,2v-59.572c0,0,1.589-2,4.388-2s4.388,2,4.388,2V189.176z"/>
                                    <g>
                                        
                                            <linearGradient id="SVGID_00000151520789428563976370000017436342094201977522_" gradientUnits="userSpaceOnUse" x1="250.001" y1="185.6764" x2="250.001" y2="190.6764">
                                            <stop  offset="0" style="stop-color:#ff8709"/>
                                            <stop  offset="1" style="stop-color:#1B2D41"/>
                                        </linearGradient>
                                        <path style="fill:url(#SVGID_00000151520789428563976370000017436342094201977522_);" d="M254.389,190.676
                                            c-0.446,0-0.888-0.198-1.183-0.576c-0.064-0.08-1.185-1.424-3.206-1.424c-2.038,0-3.16,1.367-3.207,1.425
                                            c-0.515,0.642-1.455,0.755-2.102,0.248c-0.646-0.507-0.77-1.433-0.27-2.085c0.081-0.105,2.024-2.587,5.578-2.587
                                            s5.497,2.482,5.578,2.587c0.504,0.657,0.38,1.599-0.278,2.103C255.028,190.575,254.707,190.676,254.389,190.676z"/>
                                    </g>
                                    <g>
                                        
                                            <linearGradient id="SVGID_00000124878200580049008280000011526992184038681225_" gradientUnits="userSpaceOnUse" x1="355.3512" y1="221.7002" x2="233.4747" y2="215.2157">
                                            <stop  offset="0" style="stop-color:#ff8709"/>
                                            <stop  offset="1" style="stop-color:#1B2D41"/>
                                        </linearGradient>
                                        <polygon style="fill:url(#SVGID_00000124878200580049008280000011526992184038681225_);" points="344.54,249.504 
                                            253.571,190.509 255.204,187.993 346.173,246.987 				"/>
                                    </g>
                                    <g>
                                        
                                            <linearGradient id="SVGID_00000093162842275459294960000008962529986627432122_" gradientUnits="userSpaceOnUse" x1="169.6639" y1="200.61" x2="266.1008" y2="258.0288">
                                            <stop  offset="0" style="stop-color:#ff8709"/>
                                            <stop  offset="1" style="stop-color:#1B2D41"/>
                                        </linearGradient>
                                        <polygon style="fill:url(#SVGID_00000093162842275459294960000008962529986627432122_);" points="155.46,249.504 
                                            153.827,246.987 244.796,187.993 246.429,190.509 				"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="TEXTS">
                            
                                <text transform="matrix(1 0 0 1 160.8652 341.6045)" style="fill:#ffffff; font-family:'Pristina'; font-size:44.314px;">The Library</text>
                        </g>
                        </svg>