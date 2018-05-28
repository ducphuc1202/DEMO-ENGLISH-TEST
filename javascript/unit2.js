    var viearr = ["BẢNG MẠCH CHỦ", "CẮM VÀO", "DÂY MẠNG", "Ổ ĐĨA NGOÀI", "Ổ ĐĨA CỨNG", "Ổ ĐĨA RẮN", "BÀN PHÍM", "CHUỘT", "BỘ NHỚ", "MÁY PHÁT ĐIỆN", "MÀN HÌNH", "CARD ĐỒ HỌA", "BỘ XỬ LÝ TRUNG TÂM", "LÕI KÉP", "TỐC ĐỘ XỬ LÝ", "ĐỘ PHÂN GIẢI", "THANH CUỘN", "TRƯỢT", "KÉO", "NHẤP CHUỘT", "NHẤN ĐÚP CHUỘT", "NHẤP CHUỘT PHẢI", "NHẤN", "XUẤT HIỆN", "GÓC", "ĐA PHƯƠNG TIỆN", "MÁY CHIẾU", "LOA", "KÍNH THỰC TẾ ẢO", "CÁP", "TÌM THẤY", "Ổ CẮM ĐIỆN", "BẬT LÊN", "TẮT", "NGẮT KẾT NỐI, RÚT", "GIẤY PHÉP", "ĐIỀU KHOẢN", "TÍNH NĂNG", "MÃ NGUỒN MỞ", "MÃ NGUỒN ĐÓNG", "MỤC ĐÍCH", "THEO ĐƯỜNG DẪN", "DẤU GẠCH CHÉO", "DẤU GẠCH CHÉO NGƯỢC", "HỘI THẢO TRỰC TUYẾN"];
    var engarr = ["MOTHERBOARD", "PLUG INTO", "NETWORK CABLE", "EXTENAL DRIVE", "HARD DISK DRIVE", "SOLID STATE DRIVE", "KEYBOARD", "MOUSE", "MEMORY", "POWER SUPPLY UNIT", "MONITOR", "GRAPHICS CARD", "CENTRAL PROCESSING UNIT", "DUAL-CORE", "PROCESSOR SPEED", "RESOLUTION", "SCROLL BAR", "SLIDE", "DRAG", "CLICK", "DOUBLE CLICK", "RIGHT-CLICK", "PRESS", "APPEAR", "CORNER", "MULTIMEDIA", "PROJECTOR", "SPEAKER", "VIRTUAL REALITY GOGGLES", "CABLE", "FIND OUT", "POWER SOCKET", "TURN ON", "TURN OFF", "DISCONNECT", "LICENSE", "TERMS", "FEATURE", "OPEN SOURCE", "PROPRIETARY SOURCE", "PURPOSE", "FOLLOW A LINK", "FORWARD SLASH", "BACKWARD SLASH", "WEBINAR"];
    var engarr2 = ["", "", "", "", "", "", "", "", "", "", "SCREEN", "VIDEO CARD", "CPU", "", "", "", "", "", "", "", "", "", "", "", "", "", "","", "", "","", "ELECTRICITY SOCKET", "SWITCH ON", "SWITCH OFF", "UNPLUG", "", "", "", "", "", "", "", "", "", ""];
    var run = 0;
    var stt;
    var mark = 0;
    function checking() {
        var ans = document.getElementById("answer").value;
        if(ans.length == 0) alert("Vui lòng nhập câu trả lời, không để trống");
        else {
            var res = ans.toUpperCase();
            if(res == engarr[run] || res == engarr2[run]) {
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