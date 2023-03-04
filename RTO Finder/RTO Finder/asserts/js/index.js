console.log("Welcome Selvakavin");

const htmlData= `

<table>
<tbody>
<tr>
<td>TN-01</td>
<td>Chennai&nbsp;(Central):&nbsp;Ayanavaram</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-02</td>
<td>Chennai&nbsp;(North West):&nbsp;Anna Nagar</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-03</td>
<td>Chennai&nbsp;(North East):&nbsp;Tondiarpet</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-04</td>
<td>Chennai&nbsp;(East):&nbsp;Royapuram</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-05</td>
<td>Chennai&nbsp;(North):&nbsp;Kolathur</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-06</td>
<td>Chennai&nbsp;(South East):&nbsp;Mandavelli</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-07</td>
<td>Chennai&nbsp;(South):&nbsp;Adyar</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-09</td>
<td>Chennai&nbsp;(West):&nbsp;K. K. Nagar</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-10</td>
<td>Chennai&nbsp;(South West):&nbsp;Virugambakkam</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-11</td>
<td>Tambaram</td>
<td>RTO</td>
<td>Chengalpattu</td>
</tr>
<tr>
<td>TN-12</td>
<td>Poonamallee</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-13</td>
<td>Ambattur</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-14</td>
<td>Sholinganallur</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-15</td>
<td>Ulundurpet</td>
<td>RTO</td>
<td>Kallakurichi</td>
</tr>
<tr>
<td>TN-15Z</td>
<td>Kallakurichi</td>
<td>UO</td>
<td>Kallakurichi</td>
</tr>
<tr>
<td>TN-16</td>
<td>Tindivanam</td>
<td>RTO</td>
<td>Villupuram</td>
</tr>
<tr>
<td>TN-16Z</td>
<td>Gingee</td>
<td>UO</td>
<td>Villupuram</td>
</tr>
<tr>
<td>TN-18</td>
<td>Red Hills</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-18Y</td>
<td>Gummidipoondi</td>
<td>UO</td>
<td>Tiruvallur</td>
</tr>
<tr>
<td>TN-19</td>
<td>Chengalpattu</td>
<td>RTO</td>
<td>Chengalpattu</td>
</tr>
<tr>
<td>TN-19Z</td>
<td>Madurantakam</td>
<td>UO</td>
<td>Chengalpattu</td>
</tr>
<tr>
<td>TN-20</td>
<td>Tiruvallur</td>
<td>RTO</td>
<td>Tiruvallur</td>
</tr>
<tr>
<td>TN-20X</td>
<td>Thiruthani</td>
<td>UO</td>
<td>Tiruvallur</td>
</tr>
<tr>
<td>TN-21</td>
<td>Kanchipuram</td>
<td>RTO</td>
<td>Kanchipuram</td>
</tr>
<tr>
<td>TN-22</td>
<td>Meenambakkam</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN-23</td>
<td>Vellore</td>
<td>RTO</td>
<td>Vellore</td>
</tr>
<tr>
<td>TN-23T</td>
<td>Gudiyatham</td>
<td>UO</td>
<td>Vellore</td>
</tr>
<tr>
<td>TN-24</td>
<td>Krishnagiri</td>
<td>RTO</td>
<td>Krishnagiri</td>
</tr>
<tr>
<td>TN-25</td>
<td>Thiruvannamalai</td>
<td>RTO</td>
<td>Thiruvannamalai</td>
</tr>
<tr>
<td>TN-27</td>
<td>Salem</td>
<td>Not In Use</td>
<td>Salem</td>
</tr>
<tr>
<td>TN-28</td>
<td>Namakkal&nbsp;(North)</td>
<td>RTO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN-28Z</td>
<td>Rasipuram</td>
<td>UO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN-29</td>
<td>Dharmapuri</td>
<td>RTO</td>
<td>Dharmapuri</td>
</tr>
<tr>
<td>TN-29W</td>
<td>Palacode</td>
<td>UO</td>
<td>Dharmapuri</td>
</tr>
<tr>
<td>TN-29Z</td>
<td>Harur</td>
<td>UO</td>
<td>Dharmapuri</td>
</tr>
<tr>
<td>TN-30</td>
<td>Salem&nbsp;(West)</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN-30W</td>
<td>Omalur</td>
<td>UO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN-31</td>
<td>Cuddalore</td>
<td>RTO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN-31Z</td>
<td>Panruti</td>
<td>UO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN-32</td>
<td>Villupuram</td>
<td>RTO</td>
<td>Villupuram</td>
</tr>
<tr>
<td>TN-33</td>
<td>Erode&nbsp;(East)</td>
<td>RTO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN-34</td>
<td>Tiruchengode</td>
<td>RTO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN-34Z</td>
<td>Kumarapalayam</td>
<td>UO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN-36</td>
<td>Gobichettipalayam</td>
<td>RTO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN-36W</td>
<td>Bhavani</td>
<td>UO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN-36Z</td>
<td>Sathyamangalam</td>
<td>UO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN-37</td>
<td>Coimbatore&nbsp;(South)</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN-37Z</td>
<td>Sulur</td>
<td>UO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN-38</td>
<td>Coimbatore&nbsp;(North)</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN-39</td>
<td>Tirupur&nbsp;(North)</td>
<td>RTO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN-39Z</td>
<td>Avinashi</td>
<td>UO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN-40</td>
<td>Mettupalayam</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN-41</td>
<td>Pollachi</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN-41W</td>
<td>Valparai</td>
<td>UO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN-42</td>
<td>Tirupur&nbsp;(South)</td>
<td>RTO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN-43</td>
<td>Ooty</td>
<td>RTO</td>
<td>Nilgiris</td>
</tr>
<tr>
<td>TN-43Z</td>
<td>Gudalur</td>
<td>UO</td>
<td>Nilgiris</td>
</tr>
<tr>
<td>TN-45</td>
<td>Tiruchirapalli&nbsp;(West)</td>
<td>RTO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN-45Z</td>
<td>Manapparai</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN-46</td>
<td>Perambalur</td>
<td>RTO</td>
<td>Perambalur</td>
</tr>
<tr>
<td>TN-47</td>
<td>Karur</td>
<td>RTO</td>
<td>Karur</td>
</tr>
<tr>
<td>TN-47X</td>
<td>Manmangalam</td>
<td>UO</td>
<td>Karur</td>
</tr>
<tr>
<td>TN-47Y</td>
<td>Aravakurichi</td>
<td>UO</td>
<td>Karur</td>
</tr>
<tr>
<td>TN-47Z</td>
<td>Kulithalai</td>
<td>UO</td>
<td>Karur</td>
</tr>
<tr>
<td>TN-48</td>
<td>Srirangam</td>
<td>RTO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN-48Z</td>
<td>Thuraiyur</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN-48Y</td>
<td>Musiri</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN-48X</td>
<td>Lalgudi</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN-49</td>
<td>Thanjavur</td>
<td>RTO</td>
<td>Thanjavur</td>
</tr>
<tr>
<td>TN-49Y</td>
<td>Pattukottai</td>
<td>UO</td>
<td>Thanjavur</td>
</tr>
<tr>
<td>TN-50</td>
<td>Tiruvarur</td>
<td>RTO</td>
<td>Tiruvarur</td>
</tr>
<tr>
<td>TN-50Y</td>
<td>Thiruthuraipoondi</td>
<td>UO</td>
<td>Tiruvarur</td>
</tr>
<tr>
<td>TN-50Z</td>
<td>Mannargudi</td>
<td>UO</td>
<td>Tiruvarur</td>
</tr>
<tr>
<td>TN-51</td>
<td>Nagapattinam</td>
<td>RTO</td>
<td>Nagapattinam</td>
</tr>
<tr>
<td>TN-52</td>
<td>Sankagiri</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN-54</td>
<td>Salem&nbsp;(East)</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN-55</td>
<td>Pudukottai</td>
<td>RTO</td>
<td>Pudukottai</td>
</tr>
<tr>
<td>TN-55Y</td>
<td>Illuppur</td>
<td>UO</td>
<td>Pudukottai</td>
</tr>
<tr>
<td>TN-55Z</td>
<td>Aranthangi</td>
<td>UO</td>
<td>Pudukottai</td>
</tr>
<tr>
<td>TN-56</td>
<td>Perundurai</td>
<td>RTO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN-57</td>
<td>Dindigul</td>
<td>RTO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN-57V</td>
<td>Vedasandur</td>
<td>RTO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN-57W</td>
<td>Batlagundu</td>
<td>RTO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN-58</td>
<td>Madurai&nbsp;(South)</td>
<td>RTO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN-58Y</td>
<td>Usilampatti</td>
<td>UO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN-58Z</td>
<td>Thirumangalam</td>
<td>UO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN-59</td>
<td>Madurai&nbsp;(North)</td>
<td>RTO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN-59V</td>
<td>Vadipatti</td>
<td>UO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN-59Z</td>
<td>Melur</td>
<td>UO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN-60</td>
<td>Theni</td>
<td>RTO</td>
<td>Theni</td>
</tr>
<tr>
<td>TN-60Z</td>
<td>Uthamapalayam</td>
<td>UO</td>
<td>Theni</td>
</tr>
<tr>
<td>TN-61</td>
<td>Ariyalur</td>
<td>RTO</td>
<td>Ariyalur</td>
</tr>
<tr>
<td>TN-63</td>
<td>Sivaganga</td>
<td>RTO</td>
<td>Sivaganga</td>
</tr>
<tr>
<td>TN-63Z</td>
<td>Karaikudi</td>
<td>UO</td>
<td>Sivaganga</td>
</tr>
<tr>
<td>TN-64</td>
<td>Madurai&nbsp;(Central)</td>
<td>RTO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN-65</td>
<td>Ramanathapuram</td>
<td>RTO</td>
<td>Ramanathapuram</td>
</tr>
<tr>
<td>TN-65Z</td>
<td>Paramakudi</td>
<td>UO</td>
<td>Ramanathapuram</td>
</tr>
<tr>
<td>TN-66</td>
<td>Coimbatore&nbsp;(Central)</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN-67</td>
<td>Virudhunagar</td>
<td>RTO</td>
<td>Virudhunagar</td>
</tr>
<tr>
<td>TN-67W</td>
<td>Aruppukottai</td>
<td>UO</td>
<td>Virudhunagar</td>
</tr>
<tr>
<td>TN-68</td>
<td>Kumbakonam</td>
<td>RTO</td>
<td>Thanjavur</td>
</tr>
<tr>
<td>TN-69</td>
<td>Thoothukudi</td>
<td>RTO</td>
<td>Thoothukudi</td>
</tr>
<tr>
<td>TN-70</td>
<td>Hosur</td>
<td>RTO</td>
<td>Krishnagiri</td>
</tr>
<tr>
<td>TN-72</td>
<td>Tirunelveli</td>
<td>RTO</td>
<td>Tirunelveli</td>
</tr>
<tr>
<td>TN-72V</td>
<td>Valliyur</td>
<td>UO</td>
<td>Tirunelveli</td>
</tr>
<tr>
<td>TN-73</td>
<td>Ranipet</td>
<td>RTO</td>
<td>Ranipet</td>
</tr>
<tr>
<td>TN-73Z</td>
<td>Arakkonam</td>
<td>UO</td>
<td>Ranipet</td>
</tr>
<tr>
<td>TN-74</td>
<td>Nagercoil</td>
<td>RTO</td>
<td>Kanniyakumari</td>
</tr>
<tr>
<td>TN-75</td>
<td>Marthandam</td>
<td>RTO</td>
<td>Kanniyakumari</td>
</tr>
<tr>
<td>TN-76</td>
<td>Tenkasi</td>
<td>RTO</td>
<td>Tenkasi</td>
</tr>
<tr>
<td>TN-76V</td>
<td>Ambasamudram</td>
<td>UO</td>
<td>Tirunelveli</td>
</tr>
<tr>
<td>TN-77</td>
<td>Attur</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN-77Z</td>
<td>Vazhapadi</td>
<td>UO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN-78</td>
<td>Dharapuram</td>
<td>RTO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN-78Z</td>
<td>Udumalpet</td>
<td>UO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN-79</td>
<td>Sankarankovil</td>
<td>RTO</td>
<td>Tenkasi</td>
</tr>
<tr>
<td>TN-81</td>
<td>Tiruchirapalli&nbsp;(East)</td>
<td>RTO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN-81Z</td>
<td>Thiruverumbur</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN-82</td>
<td>Mayiladuthurai</td>
<td>RTO</td>
<td>Mayiladuthurai</td>
</tr>
<tr>
<td>TN-82Z</td>
<td>Sirkazhi</td>
<td>RTO</td>
<td>Mayiladuthurai</td>
</tr>
<tr>
<td>TN-83</td>
<td>Vaniyambadi</td>
<td>RTO</td>
<td>Thirupattur</td>
</tr>
<tr>
<td>TN-83Y</td>
<td>Ambur</td>
<td>UO</td>
<td>Thirupattur</td>
</tr>
<tr>
<td>TN-83Z</td>
<td>Thirupattur</td>
<td>UO</td>
<td>Thirupattur</td>
</tr>
<tr>
<td>TN-84</td>
<td>Srivilliputhur</td>
<td>RTO</td>
<td>Virudhunagar</td>
</tr>
<tr>
<td>TN-85</td>
<td>Kundrathur</td>
<td>RTO</td>
<td>Kanchipuram</td>
</tr>
<tr>
<td>TN-86</td>
<td>Erode&nbsp;(West)</td>
<td>RTO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN-87</td>
<td>Sriperumbudur</td>
<td>RTO</td>
<td>Kanchipuram</td>
</tr>
<tr>
<td>TN-88</td>
<td>Namakkal&nbsp;(South)</td>
<td>RTO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN-88Z</td>
<td>Paramathi Velur</td>
<td>UO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN-90</td>
<td>Salem&nbsp;(South)</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN-91</td>
<td>Chidambaram</td>
<td>RTO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN-91Y</td>
<td>Neyveli</td>
<td>UO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN-91Z</td>
<td>Virudhachalam</td>
<td>UO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN-92</td>
<td>Thiruchendur</td>
<td>RTO</td>
<td>Thoothukudi</td>
</tr>
<tr>
<td>TN-93</td>
<td>Mettur</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN-94</td>
<td>Palani</td>
<td>RTO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN-94Z</td>
<td>Oddanchatram</td>
<td>UO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN-95</td>
<td>Sivakasi</td>
<td>RTO</td>
<td>Virudhunagar</td>
</tr>
<tr>
<td>TN-96</td>
<td>Kovilpatti</td>
<td>RTO</td>
<td>Thoothukudi</td>
</tr>
<tr>
<td>TN-97</td>
<td>Arani</td>
<td>RTO</td>
<td>Tiruvannamalai</td>
</tr>
<tr>
<td>TN-97Z</td>
<td>Cheyyar</td>
<td>UO</td>
<td>Tiruvannamalai</td>
</tr>
<tr>
<td>TN-99</td>
<td>Coimbatore(West)</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
</tbody>
<table>
`

//console.log(htmlData);

const parser =new DOMParser();

const parsedHtml=parser.parseFromString(htmlData,'text/html');

const tableChildrens=parsedHtml.getElementsByTagName('table')[0].children[0].children;

//console.log(tableChildrens);

const rtoDatas=[];

//creating id
let id=0;

[...tableChildrens].forEach(element => {
    rtoDatas.push(
        {
            id:id,
            code:element.children[0].innerText,
            location:element.children[1].innerText,
            type:element.children[2].innerText,
            district:element.children[3].innerText
        }      
    );    
    //increementing id
    id++;
    //console.log(element.children[0].innerHTML);
});

//console.log(rtoDatas);

function download(dataname,fileName,type) {    
    const aEL=document.createElement('a');
    const file=  new Blob([JSON.stringify(dataname,null,2)],{type,});
    aEL.href=URL.createObjectURL(file);
   // console.log(file,aEL.href);

    aEL.download=`${fileName}.json`;
    aEL.click();
}

//download(rtoDatas,'filename','application/json');
