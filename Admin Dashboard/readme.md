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