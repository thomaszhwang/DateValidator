function DateValidator(yyyy, mm, dd) {
	this.yyyy = yyyy;
	this.mm = mm;
	this.dd = dd;

	var tmp_yyyy = parseInt(this.yyyy);
	if(tmp_yyyy >= 1000 && tmp_yyyy <= 9999)
		this.isCurrentYearValid = true;
	else
		this.isCurrentYearValid = false;

	var tmp_mm = parseInt(this.mm);
	if(tmp_mm <= 12 && tmp_mm >= 1)
		this.isCurrentMonthValid = true;
	else
		this.isCurrentMonthValid = false;

	var tmp_dd = parseInt(this.dd);
	if(tmp_dd >= 1 && this.isCurrentYearValid && this.isCurrentMonthValid) {
		if (tmp_mm == 1 || tmp_mm == 3 || tmp_mm == 5 || tmp_mm == 7 || tmp_mm == 8 || tmp_mm == 10 || tmp_mm == 12 ) {
			if (tmp_dd <= 31)
				this.isCurrentDayValid = true
			else
				this.isCurrentDayValid = false;
		} else if (tmp_mm == 4 || tmp_mm == 6 || tmp_mm == 9 || tmp_mm == 11) {
			if (tmp_dd <= 30)
				this.isCurrentDayValid = true
			else
				this.isCurrentDayValid = false;
		} else if (this.isCurrentYearALeapYear()) {
			if (tmp_dd <= 29)
				this.isCurrentDayValid = true
			else
				this.isCurrentDayValid = false;
		} else {
			if (tmp_dd <= 28)
				this.isCurrentDayValid = true
			else
				this.isCurrentDayValid = false;
		}
	} else {
		this.isCurrentDayValid = false;
	}

	this.currentYear = function() {
		if(this.isCurrentYearValid)
			return tmp_yyyy;
		else
			return undefined;
	}

	this.isCurrentYearALeapYear = function() {
		if(this.isCurrentYearValid)
			return this.tmp_yyyy % 4 == 0 ? true : false;
		else
			return undefined;
	}

	this.previousYear = function() {
		if(this.isCurrentYearValid) {
			if(tmp_yyyy > 1000)
				return DateValidator(tmp_yyyy - 1, mm, dd);
			else
				return undefined;
		} else {
			return undefined;
		}
	}

	this.nextYear = function() {
		if(this.isCurrentYearValid) {
			if(tmp_yyyy < 9999)
				return DateValidator(tmp_yyyy + 1, mm, dd);
			else
				return undefined;
		} else {
			return undefined;
		}
	}

	this.currentMonth = function() {

	}

	this.previousMonth = function() {

	}

	this.nextMonth = function() {

	}

	this.currentDay = function() {

	}

	this.previousDay = function() {

	}

	this.nextDay = function() {

	}
}
