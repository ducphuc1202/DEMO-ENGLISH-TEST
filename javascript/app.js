    var viearr = ["VẤN ĐỀ", "CHẨN ĐOÁN", "BẢO DƯỠNG", "KHÁCH HÀNG", "TRÁCH NHIỆM", "NHÀ CUNG CẤP", "NHÀ SẢN XUẤT", "HỆ ĐIỀU HÀNH", "RA MẮT, TRÌNH DIỆN", "MÔ TẢ", "NHÂN VIÊN", "THAM DỰ", "TỔ CHỨC", "PHỎNG VẤN", "PHẦN CỨNG", "PHẦN MỀM", "CƠ SỞ, TRỤ SỞ", "XỬ LÝ VĂN BẢN", "BẢNG TÍNH", "TẬP ĐOÀN", "CŨNG NHƯ", "KÍCH THÍCH","MONG ĐỢI", "TIẾN HÀNH","TUYỂN DỤNG", "ĐỒNG NGHIỆP", "LUẬT LỆ", "QUẢN TRỊ CSDL", "QUẢN LÝ DỰ ÁN", "NGƯỜI PHÁT TRIỂN PHẦN MỀM", "KĨ THUẬT VIÊN HỖ TRỢ", "PHẦN TÍCH HỆ THỐNG"];
    var engarr = ["TROUBLE", "DIGNOSE", "MAINTAIN", "CUSTOMER","RESPONSIBLE", "PROVIDER", "MANUFACTURES", "OPERATING SYSTEM", "LAUNCH", "SPECIFICATION", "EMPLOYEE", "ATTEND", "ORGANISATION", "INTERVIEW", "HARDWARE", "SOFTWARE", "FACILITY", "WORD PRECESSING", "SPREADSHEET", "CORPORATION", "AS WELL AS", "EXCITE", "EXPECT", "CARRY OUT", "EMPLOY","COLLEAGE", "RULE", "DATABASE ADMINISTRATOR", "PROJECT MANAGER", "SOFTWARE DEVELOPER", "SUPPORT TECHNICIAN", "SYSTEM ANALYST"];
    var engarr2 = ["PROBLEM", "", "", "CLIENT", "", "SUPPLIER", "","","","", "STAFF","TAKE PART IN", "", "", "", "", "", "", "", "","","","","PROCEED","", "PARTNER","","","","","",""];
    var run = 0;
    var stt;
    var mark = 0;
    function checking() {
        var ans = document.getElementById("answer").value;
        if(ans.length == 0) alert("Vui lòng nhập câu trả lời, không để trống");
        else {
            var res = ans.toUpperCase();
            if(res == engarr[run] || res == engarr2[run] && res != "") {
                stt = "CORRECT";
                mark = mark + 1;
            }
            else {
                stt = "WRONG ANSWER";
            }
            document.getElementById("answer").value = null;
            run = run + 1;
            if(run < viearr.length)
                    document.getElementById("vi").innerHTML = viearr[run];
            else {
                alert("Số điểm của bạn là: " + mark + " / " + viearr.length);
            }
            document.getElementById("tv").innerHTML = viearr[run-1];
            document.getElementById("ta").innerHTML = res;
            document.getElementById("da").innerHTML = engarr[run-1] + " ; " + engarr2[run-1];
            if(stt == "CORRECT") {
                tt.style.color = "green";
            }
            else {
                tt.style.color = "red";
            }
            document.getElementById("tt").innerHTML = stt;
        }
    }
