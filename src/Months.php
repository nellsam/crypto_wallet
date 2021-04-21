<?php


class Months
{

//    const JANUARY = "January";
//    const FEBRUARY = "February";
//    const MARCH = "March";

    public static function getMonth($monthIndex) {
        $dateObj   = DateTime::createFromFormat('!m', $monthIndex);
        return $dateObj->format('F');
    }

    public static function getMonthTest() {
        return "January";
    }
}