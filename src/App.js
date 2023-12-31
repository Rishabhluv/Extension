
import './App.css';
import React, { useState } from 'react';
function App() {
  const maping = [
    { "start_ip": "36.94.244.156", "end_ip": "36.94.244.156", "country": "ID", "country_name": "Indonesia", "continent": "AS", "continent_name": "Asia", "asn": "AS7713", "as_name": "PT Telekomunikasi Indonesia", "as_domain": "telin.net" },
    { "start_ip": "166.49.237.84", "end_ip": "166.49.237.86", "country": "DE", "country_name": "Germany", "continent": "EU", "continent_name": "Europe", "asn": "AS5400", "as_name": "British Telecommunications PLC", "as_domain": "bt.com" },
    { "start_ip": "2400:8800:5e0c:100::", "end_ip": "2400:8800:5e86:ffff:ffff:ffff:ffff:ffff", "country": "HK", "country_name": "Hong Kong", "continent": "AS", "continent_name": "Asia", "asn": "AS3491", "as_name": "PCCW Global, Inc.", "as_domain": "pccwglobal.com" },
    { "start_ip": "23.194.190.0", "end_ip": "23.194.190.255", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS20940", "as_name": "Akamai International B.V.", "as_domain": "akamai.com" },
    { "start_ip": "178.253.30.57", "end_ip": "178.253.30.57", "country": "DE", "country_name": "Germany", "continent": "EU", "continent_name": "Europe", "asn": "AS202492", "as_name": "SILVERHILL GROUP HOLDING LTD", "as_domain": "sgholding.org" },
    { "start_ip": "2a09:bac5:525c:c8::", "end_ip": "2a09:bac5:525c:c8:ffff:ffff:ffff:ffff", "country": "NL", "country_name": "Netherlands", "continent": "EU", "continent_name": "Europe", "asn": "AS13335", "as_name": "Cloudflare, Inc.", "as_domain": "cloudflare.com" },
    { "start_ip": "2a09:bac5:36f8::", "end_ip": "2a09:bac5:36f8:fff:ffff:ffff:ffff:ffff", "country": "DE", "country_name": "Germany", "continent": "EU", "continent_name": "Europe", "asn": "AS13335", "as_name": "Cloudflare, Inc.", "as_domain": "cloudflare.com" },
    { "start_ip": "163.172.201.63", "end_ip": "163.172.201.69", "country": "FR", "country_name": "France", "continent": "EU", "continent_name": "Europe", "asn": "AS12876", "as_name": "SCALEWAY S.A.S.", "as_domain": "scaleway.com" },
    { "start_ip": "82.205.202.0", "end_ip": "82.205.207.255", "country": "AF", "country_name": "Afghanistan", "continent": "AS", "continent_name": "Asia", "asn": "AS30981", "as_name": "Horizonsat FZ LLC", "as_domain": "horizonsat.com" },
    { "start_ip": "21.21.21.164", "end_ip": "21.21.21.169", "country": "ID", "country_name": "Indonesia", "continent": "AS", "continent_name": "Asia", "asn": "AS749", "as_name": "DoD Network Information Center", "as_domain": "mail.mil" },
    { "start_ip": "36.92.177.76", "end_ip": "36.92.177.77", "country": "SG", "country_name": "Singapore", "continent": "AS", "continent_name": "Asia", "asn": "AS7713", "as_name": "PT Telekomunikasi Indonesia", "as_domain": "telin.net" },
    { "start_ip": "2602:fb4d::", "end_ip": "2602:fb4d:fff:ffff:ffff:ffff:ffff:ffff", "country": "KY", "country_name": "Cayman Islands", "continent": "NA", "continent_name": "North America", "asn": "AS13771", "as_name": "Digicel Cayman Limited", "as_domain": "digicelgroup.com" },
    { "start_ip": "82.165.22.63", "end_ip": "82.165.29.192", "country": "DE", "country_name": "Germany", "continent": "EU", "continent_name": "Europe", "asn": "AS8560", "as_name": "IONOS SE", "as_domain": "ionos.com" },
    { "start_ip": "23.255.12.240", "end_ip": "23.255.12.247", "country": "CN", "country_name": "China", "continent": "AS", "continent_name": "Asia", "asn": "AS11878", "as_name": "tzulo, inc.", "as_domain": "tzulo.com" },
    { "start_ip": "23.26.55.0", "end_ip": "23.26.55.255", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS20068", "as_name": "Hawk Host Inc.", "as_domain": "hawkhost.com" },
    { "start_ip": "2a01:799:3d1:a400::", "end_ip": "2a01:799:3d8:4eff:ffff:ffff:ffff:ffff", "country": "NO", "country_name": "Norway", "continent": "EU", "continent_name": "Europe", "asn": "AS29695", "as_name": "Altibox AS", "as_domain": "altibox.no" },
    { "start_ip": "2a0b:69c0::", "end_ip": "2a0b:69c7:ffff:ffff:ffff:ffff:ffff:ffff", "country": "CZ", "country_name": "Czechia", "continent": "EU", "continent_name": "Europe", "asn": "AS205619", "as_name": "Jiri Chalabala", "as_domain": "vesnet.cz" },
    { "start_ip": "2a09:bac5:d453:16c8::", "end_ip": "2a09:bac5:d453:16c8:ffff:ffff:ffff:ffff", "country": "HK", "country_name": "Hong Kong", "continent": "AS", "continent_name": "Asia", "asn": "AS13335", "as_name": "Cloudflare, Inc.", "as_domain": "cloudflare.com" },
    { "start_ip": "45.113.156.0", "end_ip": "45.113.159.255", "country": "TW", "country_name": "Taiwan", "continent": "AS", "continent_name": "Asia", "asn": "AS131597", "as_name": "New Changhua Digital Cable TV CO,.Ltd", "as_domain": "ncdtv.com.tw" },
    { "start_ip": "107.154.182.44", "end_ip": "107.154.182.47", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS19551", "as_name": "Incapsula Inc", "as_domain": "incapsula.com" },
    { "start_ip": "2001:559:8533::", "end_ip": "2001:559:8533:ffff:ffff:ffff:ffff:ffff", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS7922", "as_name": "Comcast Cable Communications, LLC", "as_domain": "comcast.com" },
    { "start_ip": "2a02:2d8::57f5:e093", "end_ip": "2a02:2d8::57f5:e093", "country": "BG", "country_name": "Bulgaria", "continent": "EU", "continent_name": "Europe", "asn": "AS9002", "as_name": "RETN Limited", "as_domain": "retn.net" },
    { "start_ip": "103.104.208.0", "end_ip": "103.104.211.255", "country": "IN", "country_name": "India", "continent": "AS", "continent_name": "Asia", "asn": "AS136720", "as_name": "ESTO MEDIA PRIVATE LIMITED", "as_domain": "estomedia.com" },
    { "start_ip": "104.255.59.120", "end_ip": "104.255.59.121", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS16509", "as_name": "Amazon.com, Inc.", "as_domain": "amazon.com" },
    { "start_ip": "2001:470:0:5b2::3", "end_ip": "2001:470:0:5b3::", "country": "DE", "country_name": "Germany", "continent": "EU", "continent_name": "Europe", "asn": "AS6939", "as_name": "Hurricane Electric LLC", "as_domain": "he.net" },
    { "start_ip": "72.14.217.64", "end_ip": "72.14.217.67", "country": "IN", "country_name": "India", "continent": "AS", "continent_name": "Asia", "asn": "AS15169", "as_name": "Google LLC", "as_domain": "google.com" },
    { "start_ip": "2001:16a2:68bb:c800::", "end_ip": "2001:16a2:68bb:c8ff:ffff:ffff:ffff:ffff", "country": "IN", "country_name": "India", "continent": "AS", "continent_name": "Asia", "asn": "AS25019", "as_name": "Saudi Telecom Company JSC", "as_domain": "stc.com.sa" },
    { "start_ip": "203.101.85.0", "end_ip": "203.101.87.27", "country": "IN", "country_name": "India", "continent": "AS", "continent_name": "Asia", "asn": "AS9498", "as_name": "BHARTI Airtel Ltd.", "as_domain": "airtel.in" },
    { "start_ip": "2600:6c46::", "end_ip": "2600:6c46:ffff:ffff:ffff:ffff:ffff:ffff", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS20115", "as_name": "Charter Communications", "as_domain": "charter.com" },
    { "start_ip": "58.138.97.0", "end_ip": "58.138.97.8", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS2497", "as_name": "Internet Initiative Japan Inc.", "as_domain": "iij.ad.jp" },
    { "start_ip": "2001:fd8:3404:99e3::", "end_ip": "2001:fd8:3404:a159:ffff:ffff:ffff:ffff", "country": "BD", "country_name": "Bangladesh", "continent": "AS", "continent_name": "Asia", "asn": "AS132199", "as_name": "Globe Telecom Inc.", "as_domain": "globe.com.ph" },
    { "start_ip": "2a0f:9407:1f3::", "end_ip": "2a0f:9407:1f3:ffff:ffff:ffff:ffff:ffff", "country": "CA", "country_name": "Canada", "continent": "NA", "continent_name": "North America", "asn": "AS53356", "as_name": "Free Range Cloud Hosting Inc.", "as_domain": "freerangecloud.com" },
    { "start_ip": "187.162.114.0", "end_ip": "187.162.125.255", "country": "MX", "country_name": "Mexico", "continent": "NA", "continent_name": "North America", "asn": "AS6503", "as_name": "Axtel, S.A.B. de C.V.", "as_domain": "axtel.mx" },
    { "start_ip": "66.193.56.0", "end_ip": "66.193.56.255", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS10753", "as_name": "Level 3 Parent, LLC", "as_domain": "level3.com" },
    { "start_ip": "140.222.192.100", "end_ip": "140.222.192.101", "country": "KR", "country_name": "South Korea", "continent": "AS", "continent_name": "Asia", "asn": "AS703", "as_name": "Verizon Business", "as_domain": "verizonbusiness.com" },
    { "start_ip": "123.29.4.155", "end_ip": "123.29.4.157", "country": "SG", "country_name": "Singapore", "continent": "AS", "continent_name": "Asia", "asn": "AS45899", "as_name": "VNPT Corp", "as_domain": "vnpt.vn" },
    { "start_ip": "2001:67c:2ce8::", "end_ip": "2001:67c:2ce8:ffff:ffff:ffff:ffff:ffff", "country": "FI", "country_name": "Finland", "continent": "EU", "continent_name": "Europe", "asn": "AS199508", "as_name": "S1 Networks Oy", "as_domain": "s1networks.fi" },
    { "start_ip": "58.69.7.0", "end_ip": "58.69.252.255", "country": "PH", "country_name": "Philippines", "continent": "AS", "continent_name": "Asia", "asn": "AS9299", "as_name": "Philippine Long Distance Telephone Company", "as_domain": "pldt.com" },
    { "start_ip": "193.67.179.0", "end_ip": "193.67.179.127", "country": "NL", "country_name": "Netherlands", "continent": "EU", "continent_name": "Europe", "asn": "AS702", "as_name": "Verizon Business", "as_domain": "verizonbusiness.com" },
    { "start_ip": "172.253.16.1", "end_ip": "172.253.16.7", "country": "TW", "country_name": "Taiwan", "continent": "AS", "continent_name": "Asia", "asn": "AS396982", "as_name": "Google LLC", "as_domain": "google.com" },
    { "start_ip": "209.47.92.16", "end_ip": "209.47.92.31", "country": "CA", "country_name": "Canada", "continent": "NA", "continent_name": "North America", "asn": "AS701", "as_name": "Verizon Business", "as_domain": "verizonbusiness.com" },
    { "start_ip": "50.239.127.0", "end_ip": "50.239.127.255", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS20214", "as_name": "Comcast Cable Communications, LLC", "as_domain": "comcast.com" },
    { "start_ip": "2a06:9ac0:860:1200::", "end_ip": "2a06:9ac0:861:a9ff:ffff:ffff:ffff:ffff", "country": "VG", "country_name": "British Virgin Islands", "continent": "NA", "continent_name": "North America", "asn": "AS209242", "as_name": "Cloudflare London, LLC", "as_domain": "cloudflare.com" },
    { "start_ip": "139.149.90.0", "end_ip": "139.149.93.255", "country": "CH", "country_name": "Switzerland", "continent": "EU", "continent_name": "Europe", "asn": "AS17071", "as_name": "UBS AG", "as_domain": "ubs.com" },
    { "start_ip": "107.162.179.163", "end_ip": "107.162.179.163", "country": "SG", "country_name": "Singapore", "continent": "AS", "continent_name": "Asia", "asn": "AS55002", "as_name": "F5, Inc.", "as_domain": "f5.com" },
    { "start_ip": "2001:550:0:1000::9a1a:14", "end_ip": "2001:550:0:1000::9a1a:27", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS174", "as_name": "Cogent Communications", "as_domain": "cogentcomm.biz" },
    { "start_ip": "52.111.200.0", "end_ip": "52.111.200.255", "country": "QA", "country_name": "Qatar", "continent": "AS", "continent_name": "Asia", "asn": "AS8075", "as_name": "Microsoft Corporation", "as_domain": "microsoft.com" },
    { "start_ip": "2001:df2:45c1::", "end_ip": "2001:df2:45c1:ffff:ffff:ffff:ffff:ffff", "country": "TW", "country_name": "Taiwan", "continent": "AS", "continent_name": "Asia", "asn": "AS151188", "as_name": "404 Network Information Co.", "as_domain": "simple.taipei" },
    { "start_ip": "2001:2000:3080:1edf::1", "end_ip": "2001:2000:3080:1edf::1", "country": "HK", "country_name": "Hong Kong", "continent": "AS", "continent_name": "Asia", "asn": "AS1299", "as_name": "Arelion Sweden AB", "as_domain": "arelion.com" },
    { "start_ip": "212.83.185.165", "end_ip": "212.83.185.165", "country": "NL", "country_name": "Netherlands", "continent": "EU", "continent_name": "Europe", "asn": "AS12876", "as_name": "SCALEWAY S.A.S.", "as_domain": "scaleway.com" },
    { "start_ip": "2a09:bac5:3b0b::", "end_ip": "2a09:bac5:3b0b:7ff:ffff:ffff:ffff:ffff", "country": "IN", "country_name": "India", "continent": "AS", "continent_name": "Asia", "asn": "AS13335", "as_name": "Cloudflare, Inc.", "as_domain": "cloudflare.com" },
    { "start_ip": "89.113.64.0", "end_ip": "89.113.95.255", "country": "RU", "country_name": "Russia", "continent": "EU", "continent_name": "Europe", "asn": "AS8402", "as_name": "PJSC \"Vimpelcom\"", "as_domain": "corbina.net" },
    { "start_ip": "20.150.52.0", "end_ip": "20.150.52.255", "country": "GB", "country_name": "United Kingdom", "continent": "EU", "continent_name": "Europe", "asn": "AS8075", "as_name": "Microsoft Corporation", "as_domain": "microsoft.com" },
    { "start_ip": "23.1.35.10", "end_ip": "23.1.35.10", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS33905", "as_name": "Akamai International B.V.", "as_domain": "akamai.com" },
    { "start_ip": "2a02:26f7:b748::", "end_ip": "2a02:26f7:b748:ffff:ffff:ffff:ffff:ffff", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS36183", "as_name": "Akamai Technologies, Inc.", "as_domain": "akamai.com" },
    { "start_ip": "2404:ff80:ffff:1::", "end_ip": "2404:ff80:ffff:ffff:ffff:ffff:ffff:ffff", "country": "HK", "country_name": "Hong Kong", "continent": "AS", "continent_name": "Asia", "asn": "AS64096", "as_name": "BIH-Global Internet Harbor", "as_domain": "bih.cn" },
    { "start_ip": "154.16.141.0", "end_ip": "154.16.141.255", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS61317", "as_name": "Hivelocity Inc", "as_domain": "hivelocity.net" },
    { "start_ip": "185.211.136.0", "end_ip": "185.211.139.255", "country": "SE", "country_name": "Sweden", "continent": "EU", "continent_name": "Europe", "asn": "AS12552", "as_name": "GlobalConnect AB", "as_domain": "globalconnect.se" },
    { "start_ip": "86.174.184.83", "end_ip": "86.174.184.147", "country": "IE", "country_name": "Ireland", "continent": "EU", "continent_name": "Europe", "asn": "AS2856", "as_name": "British Telecommunications PLC", "as_domain": "bt.com" },
    { "start_ip": "62.115.190.92", "end_ip": "62.115.190.99", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS1299", "as_name": "Arelion Sweden AB", "as_domain": "arelion.com" },
    { "start_ip": "2a09:bac1:19a0:180::", "end_ip": "2a09:bac1:19a0:180:ffff:ffff:ffff:ffff", "country": "CN", "country_name": "China", "continent": "AS", "continent_name": "Asia", "asn": "AS13335", "as_name": "Cloudflare, Inc.", "as_domain": "cloudflare.com" },
    { "start_ip": "212.115.183.165", "end_ip": "212.115.183.166", "country": "IT", "country_name": "Italy", "continent": "EU", "continent_name": "Europe", "asn": "AS3257", "as_name": "GTT Communications Inc.", "as_domain": "gtt.net" },
    { "start_ip": "2001:2000:3080:4d5::", "end_ip": "2001:2000:3080:4d5:ffff:ffff:ffff:ffff", "country": "FR", "country_name": "France", "continent": "EU", "continent_name": "Europe", "asn": "AS1299", "as_name": "Arelion Sweden AB", "as_domain": "arelion.com" },
    { "start_ip": "213.248.75.64", "end_ip": "213.248.75.65", "country": "FR", "country_name": "France", "continent": "EU", "continent_name": "Europe", "asn": "AS1299", "as_name": "Arelion Sweden AB", "as_domain": "arelion.com" },
    { "start_ip": "209.239.99.0", "end_ip": "209.239.99.255", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS22675", "as_name": "MASTERBRAND CABINETS, INC.", "as_domain": "masterbrandcabinets.com" },
    { "start_ip": "78.108.251.0", "end_ip": "78.108.251.255", "country": "BG", "country_name": "Bulgaria", "continent": "EU", "continent_name": "Europe", "asn": "AS203917", "as_name": "Hashlink OOD", "as_domain": "hashlink.net" },
    { "start_ip": "168.203.8.0", "end_ip": "168.203.11.255", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS13855", "as_name": "The Municipal Communications Utility of the City of Cedar Falls, Iowa", "as_domain": "cfu.net" },
    { "start_ip": "2001:1900:5:2:2::16a6", "end_ip": "2001:1900:5:2:2::16a6", "country": "GB", "country_name": "United Kingdom", "continent": "EU", "continent_name": "Europe", "asn": "AS3356", "as_name": "Level 3 Parent, LLC", "as_domain": "lumen.com" },
    { "start_ip": "211.226.165.0", "end_ip": "211.227.146.255", "country": "KR", "country_name": "South Korea", "continent": "AS", "continent_name": "Asia", "asn": "AS4766", "as_name": "Korea Telecom", "as_domain": "kt.com" },
    { "start_ip": "2a0e:fd45:2a0d::", "end_ip": "2a0e:fd45:2a0d:3fff:ffff:ffff:ffff:ffff", "country": "FR", "country_name": "France", "continent": "EU", "continent_name": "Europe", "asn": "AS213253", "as_name": "MAEL GRAMAIN", "as_domain": "enpls.org" },
    { "start_ip": "46.235.49.0", "end_ip": "46.235.49.255", "country": "RU", "country_name": "Russia", "continent": "EU", "continent_name": "Europe", "asn": "AS51764", "as_name": "JSC AMTEL-SVYAZ", "as_domain": "amtelcom.ru" },
    { "start_ip": "103.68.177.0", "end_ip": "103.68.177.255", "country": "IN", "country_name": "India", "continent": "AS", "continent_name": "Asia", "asn": "AS55824", "as_name": "NKN Core Network", "as_domain": "nkn.gov.in" },
    { "start_ip": "194.116.168.0", "end_ip": "194.116.168.255", "country": "DE", "country_name": "Germany", "continent": "EU", "continent_name": "Europe", "asn": "AS203329", "as_name": "NTT Global Data Centers EMEA GmbH", "as_domain": "global.ntt" },
    { "start_ip": "2a0b:21c0:3003:100::", "end_ip": "2a0b:21c0:4000:2:ffff:ffff:ffff:ffff", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS21859", "as_name": "Zenlayer Inc", "as_domain": "zenlayer.com" },
    { "start_ip": "45.60.117.232", "end_ip": "45.60.117.232", "country": "DE", "country_name": "Germany", "continent": "EU", "continent_name": "Europe", "asn": "AS19551", "as_name": "Incapsula Inc", "as_domain": "incapsula.com" },
    { "start_ip": "5.105.174.0", "end_ip": "5.105.174.255", "country": "CH", "country_name": "Switzerland", "continent": "EU", "continent_name": "Europe", "asn": "AS6830", "as_name": "Liberty Global B.V.", "as_domain": "libertyglobal.com" },
    { "start_ip": "177.228.32.0", "end_ip": "177.228.87.255", "country": "MX", "country_name": "Mexico", "continent": "NA", "continent_name": "North America", "asn": "AS13999", "as_name": "Mega Cable, S.A. de C.V.", "as_domain": "megacable.com.mx" },
    { "start_ip": "2604:1380:4091:5700::", "end_ip": "2604:1380:4091:57ff:ffff:ffff:ffff:ffff", "country": "DE", "country_name": "Germany", "continent": "EU", "continent_name": "Europe", "asn": "AS54825", "as_name": "Packet Host, Inc.", "as_domain": "packet.com" },
    { "start_ip": "163.181.103.115", "end_ip": "163.181.103.115", "country": "VN", "country_name": "Vietnam", "continent": "AS", "continent_name": "Asia", "asn": "AS24429", "as_name": "Zhejiang Taobao Network Co.,Ltd", "as_domain": "alibabacloud.com" },
    { "start_ip": "184.29.145.28", "end_ip": "184.29.145.28", "country": "NL", "country_name": "Netherlands", "continent": "EU", "continent_name": "Europe", "asn": "AS32787", "as_name": "Akamai Technologies, Inc.", "as_domain": "akamai.com" },
    { "start_ip": "209.249.73.89", "end_ip": "209.249.73.92", "country": "CA", "country_name": "Canada", "continent": "NA", "continent_name": "North America", "asn": "AS6461", "as_name": "Zayo Bandwidth", "as_domain": "zayo.com" },
    { "start_ip": "107.154.65.48", "end_ip": "107.154.65.52", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS19551", "as_name": "Incapsula Inc", "as_domain": "incapsula.com" },
    { "start_ip": "2a01:111:2000:2:8000::1862", "end_ip": "2a01:111:2000:2:8000::1862", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS8075", "as_name": "Microsoft Corporation", "as_domain": "microsoft.com" },
    { "start_ip": "180.87.24.0", "end_ip": "180.87.24.15", "country": "MY", "country_name": "Malaysia", "continent": "AS", "continent_name": "Asia", "asn": "AS6453", "as_name": "TATA COMMUNICATIONS (AMERICA) INC", "as_domain": "tatacommunications.com" },
    { "start_ip": "2001:da8:b00a::", "end_ip": "2001:da8:b00b:ffff:ffff:ffff:ffff:ffff", "country": "CN", "country_name": "China", "continent": "AS", "continent_name": "Asia", "asn": "AS24371", "as_name": "CERNET2 IX at Jilin University", "as_domain": "cernet.edu.cn" },
    { "start_ip": "172.172.246.0", "end_ip": "172.172.246.127", "country": "ID", "country_name": "Indonesia", "continent": "AS", "continent_name": "Asia", "asn": "AS8075", "as_name": "Microsoft Corporation", "as_domain": "microsoft.com" },
    { "start_ip": "83.233.23.18", "end_ip": "83.233.23.48", "country": "SE", "country_name": "Sweden", "continent": "EU", "continent_name": "Europe", "asn": "AS29518", "as_name": "Bredband2 AB", "as_domain": "bredband2.com" },
    { "start_ip": "65.127.159.0", "end_ip": "65.127.162.255", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS209", "as_name": "CenturyLink Communications, LLC", "as_domain": "lumen.com" },
    { "start_ip": "103.52.237.0", "end_ip": "103.52.238.255", "country": "JP", "country_name": "Japan", "continent": "AS", "continent_name": "Asia", "asn": "AS18046", "as_name": "DongFong Technology Co. Ltd.", "as_domain": "dongfong.com.tw" },
    { "start_ip": "163.18.102.109", "end_ip": "163.18.102.109", "country": "CN", "country_name": "China", "continent": "AS", "continent_name": "Asia", "asn": "AS1659", "as_name": "Taiwan Academic Network (TANet) Information Center", "as_domain": "moe.edu.tw" },
    { "start_ip": "213.248.69.144", "end_ip": "213.248.69.159", "country": "ES", "country_name": "Spain", "continent": "EU", "continent_name": "Europe", "asn": "AS1299", "as_name": "Arelion Sweden AB", "as_domain": "arelion.com" },
    { "start_ip": "2001:470:1f1a:824::", "end_ip": "2001:470:1f1a:829:ffff:ffff:ffff:ffff", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS6939", "as_name": "Hurricane Electric LLC", "as_domain": "he.net" },
    { "start_ip": "199.10.42.0", "end_ip": "199.10.46.255", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS367", "as_name": "DoD Network Information Center", "as_domain": "mail.mil" },
    { "start_ip": "197.241.72.0", "end_ip": "197.241.95.255", "country": "DJ", "country_name": "Djibouti", "continent": "AF", "continent_name": "Africa", "asn": "AS30990", "as_name": "DJIBOUTI TELECOM S.A.", "as_domain": "djiboutitelecom.dj" },
    { "start_ip": "103.227.16.0", "end_ip": "103.227.19.255", "country": "AF", "country_name": "Afghanistan", "continent": "AS", "continent_name": "Asia", "asn": "AS133202", "as_name": "AFSAT", "as_domain": "afsat.af" },
    { "start_ip": "2001:4998:58:4807::2", "end_ip": "2001:4998:58:4808::", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS26101", "as_name": "Oath Holdings Inc.", "as_domain": "oath.com" },
    { "start_ip": "2602:802:d000::", "end_ip": "2602:802:d00f:ffff:ffff:ffff:ffff:ffff", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS53506", "as_name": "tastyworks, Inc.", "as_domain": "tastyworks.com" },
    { "start_ip": "149.71.40.0", "end_ip": "149.71.47.255", "country": "ES", "country_name": "Spain", "continent": "EU", "continent_name": "Europe", "asn": "AS174", "as_name": "Cogent Communications", "as_domain": "cogentcomm.biz" },
    { "start_ip": "86.63.0.0", "end_ip": "86.63.63.255", "country": "GB", "country_name": "United Kingdom", "continent": "EU", "continent_name": "Europe", "asn": "AS60426", "as_name": "WightFibre Limited", "as_domain": "wightfibre.com" },
    { "start_ip": "45.60.166.247", "end_ip": "45.60.166.249", "country": "US", "country_name": "United States", "continent": "NA", "continent_name": "North America", "asn": "AS19551", "as_name": "Incapsula Inc", "as_domain": "incapsula.com" }
  ];
  const [first, setfirst] = useState("Show My Location")
  const [firstcss, setfirstcss] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [location, setlocation] = useState("")
  const [loading, setloading] = useState("")
  const [loadingcss, setloadingcss] = useState(false)
  const fun = async () => {
    setfirst("");
    setloading("Loading....");
    setfirstcss(current => !current)
    setloadingcss(current => !current);
    const response = await fetch(`https://api.ipify.org?format=json`);
    console.log(response);
    const Data = await response.json();
    const IP = Data.ip;
    console.log("Get the IP");
    const request = await fetch(`https://ipinfo.io/json?token=608374b19345b0`);
    const jsonResponse = await request.json()
    let City = jsonResponse.city;
    let Country = jsonResponse.country;
    for (var j = 0; j < maping.length; j++) {
      if (maping[j].country == Country) {
        console.log("GOT");
        Country = maping[j].country_name;
      }
    }
    setTimeout(() => {
      console.log("this is the first message");
      setloading("");
      setloadingcss(current => !current);
      setIsActive(current => !current);
      setlocation(`Your country is ${Country} and city is ${City}`)
      setfirst("")
    }, 1200);
  };
  return <>
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen flex  items-center justify-center" >
      <div className={isActive ? 'text-xl bg-white-500 text-white font-bold py-2 px-4 border-b-4 border-white-700' : ''}>{location}</div>
      <div className={loadingcss ? 'text-xl bg-white-500 text-white font-bold py-2 px-4 border-white-700' : ''}>{loading}</div>
      <button className={firstcss ? '' : "text-xl text-white bg-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"} onClick={fun}>{first}</button>
    </div>
  </>
}
export default App;
