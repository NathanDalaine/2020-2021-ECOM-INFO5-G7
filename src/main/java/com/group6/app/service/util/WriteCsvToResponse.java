package com.group6.app.service.util;
import com.group6.app.service.dto.PlancheDTO;



import com.opencsv.CSVWriter;
import com.opencsv.bean.ColumnPositionMappingStrategy;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import com.opencsv.exceptions.CsvException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.PrintWriter;
import java.util.List;

public class WriteCsvToResponse {

    private static final Logger LOGGER = LoggerFactory.getLogger(WriteCsvToResponse.class);

    public static void writePlanches(PrintWriter writer, List<PlancheDTO> planches) {

        try {

            ColumnPositionMappingStrategy<PlancheDTO> mapStrategy
                    = new ColumnPositionMappingStrategy<>();

            mapStrategy.setType(PlancheDTO.class);

            String[] columns = new String[]{"id", "marque", "modele","numero","localisation","etat","libelle","volume","createdBy","updateBy","deleteBy","createdAt","updatedAt","deletedAt","niveaurequis"};
            mapStrategy.setColumnMapping(columns);

            StatefulBeanToCsv<PlancheDTO> btcsv = new StatefulBeanToCsvBuilder<PlancheDTO>(writer)
                    .withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
                    .withMappingStrategy(mapStrategy)
                    .withSeparator(',')
                    .build();

            btcsv.write(planches);

        } catch (CsvException ex) {

            LOGGER.error("Error mapping Bean to CSV", ex);
        }
    }


}