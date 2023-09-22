public with sharing class CsvController {
    @AuraEnabled(cacheable = true)
    public static List<Account> fetchRecords() {
        return [SELECT Id, Name, Phone, Industry From Account WHERE Phone != null ORDER BY LastModifiedDate DESC Limit 20];
    }
}