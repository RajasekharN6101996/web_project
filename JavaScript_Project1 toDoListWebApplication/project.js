conunt1 = 0;
    sNum = 0;
    arr = [];
    // submit function
    function st() {
      debugger;
      var name = document.getElementById("in1").value;
      var cat = document.getElementById("s1").value;
      var pr = document.getElementById("s2").value;
      var sd = document.getElementById("d1").value;
      var ed = document.getElementById("d2").value;
      var sd1 = sd.split("-").join("");
      var ed1 = ed.split("-").join("");
      console.log(sd1 + "<br>");
      console.log(ed1 + "<br>");
      console.log(ed + "<br>");
      console.log(sd + "<br>");
      if (name == "" || cat == "" || pr == "" || sd == "" || ed == "") {
        console.log("hello");
        return false;
      }
      if (sd1 > ed1) {
        alert("enter proper date");
        return false;
      }
      console.log(name);
      console.log(cat);
      console.log(pr);
      console.log(sd);
      console.log(ed);
      var det = {
        "name": name,
        "category": cat,
        "Priority": pr,
        "Startdate": sd,
        "Enddate": ed,
        "checke": "false"
      };
      var date = new Date();
      var uq = date.getFullYear() + "" + date.getDay() + "" + date.getMonth() + "" + date.getTime();
      localStorage.setItem(uq, JSON.stringify(det));
      let pp = document.getElementById("tt2");
      pp.innerHTML = "";
      document.getElementById("in1").value="";
      document.getElementById("s1").value="";
      document.getElementById("s2").value="";
      document.getElementById("d1").value="";
      document.getElementById("d2").value="";
      open();
    }
    // print function
    function open() {
      debugger;
      if (conunt1 == 1) {
        insert(globel, sNum);
        sNum = sNum + 1;
      }
      else {
        for (let i = 0; i <= localStorage.length; i++) {
          let m = Object.keys(localStorage);
          var get = localStorage.getItem(m[i]);
          get1 = JSON.parse(get);
          console.log(Object.keys(localStorage));
          insert(get1, i);
        }
      }
    }
    // table create function
    function insert(a, i) {
      var x = document.getElementById("tt2");
      let tr1 = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let td6 = document.createElement("td");
      let c1 = document.createElement("input");
      let bt1 = document.createElement("button");
      let bt2 = document.createElement("button");
      var bb1 = document.createTextNode("Edit");
      var bb2 = document.createTextNode("Delete");
      tr1.style.textAlign = "center";
      bt2.id = change(i);
      bt1.id = change1(i);
      c1.id = change2(i);
      bt1.style.margin = "5px";
      bt1.style.borderRadius = "10px";
      bt2.style.borderRadius = "10px";
      bt2.style.borderColor = "silver";
      bt1.style.borderColor = "silver";
      bt2.style.backgroundColor = "black";
      bt1.style.backgroundColor = "black";
      bt2.style.color = "white";
      bt1.style.color = "white";
      bt1.setAttribute("onclick", "edit(this.id)");
      bt2.setAttribute("onclick", "dele(this.id)");
      c1.setAttribute("onclick", "check(this.id)");
      bt1.appendChild(bb1);
      bt2.appendChild(bb2);
      c1.type = "checkbox";
      console.log(tr1);
      td6.appendChild(c1);
      td6.appendChild(bt1);
      td6.appendChild(bt2);
      tr1.appendChild(td1);
      tr1.appendChild(td2);
      tr1.appendChild(td3);
      tr1.appendChild(td4);
      tr1.appendChild(td5);
      tr1.appendChild(td6);
      x.appendChild(tr1);
      td1.innerHTML = get1.name;
      td2.textContent = get1.category;
      td3.textContent = get1.Priority;
      td4.textContent = get1.Startdate;
      td5.textContent = get1.Enddate;
      let he = get1.checke;
      if (he == "true") {
        c1.checked = "true";
        bt1.disabled = "true";
        bt1.style.color = "red";
        tr1.style.color = "red";
      }
    }
    //id creation functions
    function change(i) {
      let k = "a." + (i);
      return k;
    }
    function change1(i) {
      let k = "b." + (i);
      return k;
    }
    function change2(i) {
      let k = "c." + (i);
      return k;
    }
    //end id creation functions
    //delete function
    function dele(v) {
      // debugger;
      let p = v;
      p = p.split(".");
      let k = p[1];
      if (conunt1 == 1) {
        let pp1 = arr[k];
        localStorage.removeItem(pp1);

      }
      else {
        let m = Object.keys(localStorage);
        localStorage.removeItem(m[k]);
      }
      let pp = document.getElementById("tt2");
      pp.innerHTML = "";
      open();
    }
    // edit function
    function edit(c) {
      bu1.disabled = "true";
      c2 = c;
      debugger;
      let p = c;
      p = p.split(".");
      console.log(p);
      console.log(p[1]);
      let k = p[1];
      if (conunt1 == 1) {
        let pp = arr.length;
        let ed1 = arr[k];
        var get = localStorage.getItem(ed1);
      }
      else {
        let m = Object.keys(localStorage);
        var get = localStorage.getItem(m[k]);
      }
      let get1 = JSON.parse(get);
      document.getElementById("in1").value = get1.name;
      document.getElementById("s1").value = get1.category;
      document.getElementById("s2").value = get1.Priority;
      document.getElementById("d1").value = get1.Startdate;
      document.getElementById("d2").value = get1.Enddate;
    }
    //update function
    function up() {
      debugger;
      console.log(c2);
      c2 = c2.split(".");
      console.log(c2);
      console.log(c2[1]);
      let name = document.getElementById("in1").value;
      let cat = document.getElementById("s1").value;
      let pr = document.getElementById("s2").value;
      let sd = document.getElementById("d1").value;
      let ed = document.getElementById("d2").value;
      if (name == "" || cat == "" || pr == "" || sd == "" || ed == "") {
        console.log("hello");
        return false;
      }
      let det = {
        "name": name,
        "category": cat,
        "Priority": pr,
        "Startdate": sd,
        "Enddate": ed,
        "checke": "false"
      };
      let k = c2[1];
      if (conunt1 == 1) {
        let ed1 = arr[k];
        var get = ed1;
      }
      else {
        let m = Object.keys(localStorage);
        var get = m[k];
      }
      localStorage.setItem(get, JSON.stringify(det));
      let pp = document.getElementById("tt2");
      pp.innerHTML = "";
      open();

      debugger;
    }
    //check funtion
    function check(z) {
      debugger;
      z = z.split(".");
      z = z[1];
      if (conunt1 == 1) {
        let p1p = arr[z];
        var get = localStorage.getItem(p1p);
        var d = p1p;
      }
      else {
        let m = Object.keys(localStorage);
        var get = localStorage.getItem(m[z]);
        var d = m[z];
      }

      let get1 = JSON.parse(get);
      let name = get1.name;
      let cat = get1.category;
      let pr = get1.Priority;
      let sd = get1.Startdate;
      let ed = get1.Enddate;
      let r = get1.checke;
      if (r == "false") {
        var det = {
          "name": name,
          "category": cat,
          "Priority": pr,
          "Startdate": sd,
          "Enddate": ed,
          "checke": "true"
        };
      }
      else if (r == "true") {
        var det = {
          "name": name,
          "category": cat,
          "Priority": pr,
          "Startdate": sd,
          "Enddate": ed,
          "checke": "false"
        };
      }

      localStorage.setItem(d, JSON.stringify(det));
      let pp = document.getElementById("tt2");
      pp.innerHTML = "";
      open();
    }
    //search function
    function sea1(seN) {
      console.log(seN);
      debugger;
      let x = document.getElementById("ni1").value;
      console.log(x);
      let pp = document.getElementById("tt2");
      pp.innerHTML = "";
      for (var i = 0; i <= localStorage.length; i++) {
        var m = Object.keys(localStorage);
        let kk = m[i];
        var get = localStorage.getItem(m[i]);
        get1 = JSON.parse(get);
        if (seN == 0) {
          var na = get1.name;
          var na1 = get1.category;
          var na2 = get1.Priority;
          globel = get1;
          if (x == na) {
            arr.push(kk);
            conunt1 = 1;
            open();
          }
          else if(x==na1){
            arr.push(kk);
            conunt1 = 1;
            open();
          }
          else if(x==na2){
            arr.push(kk);
            conunt1 = 1;
            open();
          }
        }
        else if (seN == 1) {
          var na = get1.checke;
          globel = get1;
          if (na == "true") {
            arr.push(kk);
            conunt1 = 1;
            open();
          }
        }
        else if (seN == 2) {
          var na = get1.checke;
          globel = get1;
          if (na == "false") {
            arr.push(kk);
            conunt1 = 1;
            open();
          }
        }
      }
    }
    //hide and display function
    function hid(){
      document.getElementById("ani").style.display="none";
      document.getElementById("ref1").style.display="block";
    }
    //refresh buttion
    function reff(){
      let pp = document.getElementById("tt2");
      pp.innerHTML = "";
      conunt1=0;
      open();
    }
