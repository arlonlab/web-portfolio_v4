package com.arlonlabalan.webportfolioapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.management.ManagementFactory;
import java.lang.management.OperatingSystemMXBean;
import java.util.HashMap;
import java.util.Map;

@RestController
public class MetricsController {

    private final Runtime runtime = Runtime.getRuntime();
    private final OperatingSystemMXBean osBean = ManagementFactory.getOperatingSystemMXBean();

    @GetMapping("/api/metrics")
    public Map<String, Object> getMetrics() {
        Map<String, Object> metrics = new HashMap<>();
        metrics.put("cpu", osBean.getSystemLoadAverage()); // CPU Load
        metrics.put("mem", (runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024)); // Used memory in MB
        metrics.put("threads", Thread.activeCount());
        metrics.put("uptime", ManagementFactory.getRuntimeMXBean().getUptime() / 1000); // seconds
        return metrics;
    }
}
